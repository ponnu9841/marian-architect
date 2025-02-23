import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fetchService } from "@/redux/features/service-slice";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { useAppSelector } from "@/redux/hooks/use-selector";
import { ServiceFormData, serviceSchema } from "@/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextEditor from "@/components/ui/text-editor";
import ImageUpload from "@/components/imageUpload";
import RenderError from "@/components/render-error";
import FormAction from "@/components/admin/form-action";
import axiosClient from "@/axios/axios-client";

export default function ServicesForm() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ServiceFormData>({
    resolver: zodResolver(serviceSchema),
  });

  const dispatch = useAppDispatch();
  const [images, setImages] = useState<ExtendedFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [existingImage, setExistingImage] = useState("");
  const { selectedService } = useAppSelector(
    (state) => state.rootReducer.service
  );

  const onSubmit = (data: ServiceFormData) => {
    setLoading(true);
    const form = new FormData();
    form.append("title", data.title);
    form.append("shortDescription", data.shortDescription || "");
    form.append("longDescription", data.longDescription || "");
    if (images.length > 0) {
      form.append("image", images[0]);
    }
    if (data.alt) {
      form.append("alt", data.alt);
    }
    if (!data.id) {
      axiosClient
        .post("/service", form)
        .then((response) => {
          if (response.status === 200) {
            successCB();
          }
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        })
        .finally(() => setLoading(false));
    } else {
      form.append("_method", "PUT");
      form.append("id", data.id);
      axiosClient
        .post("/service", form)
        .then((response) => {
          if (response.status === 200) {
            successCB();
          }
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        })
        .finally(() => setLoading(false));
    }

    function successCB() {
      resetForm();
      dispatch(fetchService());
    }
  };

  function resetForm() {
    reset({
      id: "",
      title: "",
      shortDescription: "",
      longDescription: "",
      alt: "",
    });
    setImages([]);
    setExistingImage("");
  }

  useEffect(() => {
    if (selectedService) {
      reset({
        id: selectedService.id,
        title: selectedService.title,
        shortDescription: selectedService.short_description || "",
        longDescription: selectedService.long_description || "",
        alt: selectedService.alt || "", // Assuming you have this field
      });
      (async () => {
        const fileUrl = selectedService.image; // Replace with your URL
        const filename = "service-image.png";
        const file = new File([fileUrl], filename, {
          type: "image/png",
        }) as ExtendedFile;
        file.url = fileUrl;
        setImages([file]);
      })();
    }
  }, [selectedService]); //eslint-disable-line

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("id")} />
      <div className="mt-4">
        <Label htmlFor="title">Title</Label>
        <Input
          {...register("title")}
          type="text"
          id="title"
          className={errors.title ? "border-red-500" : ""}
          aria-invalid={errors.title ? "true" : "false"}
          aria-describedby={errors.title ? "service-name-error" : undefined}
          placeholder="Service Name"
        />
        <RenderError error={errors.title?.message} />
      </div>
      <div className="mt-4">
        <ImageUpload
          images={images}
          setImages={setImages}
          existingImage={existingImage}
        />
      </div>
      {images.length > 0 && (
        <div className="mt-0">
          <Label htmlFor="alt">Image Alt</Label>
          <Input
            {...register("alt")}
            type="text"
            id="alt"
            placeholder="Image alt"
            className={errors.alt ? "border-red-500" : ""}
            aria-invalid={errors.alt ? "true" : "false"}
            aria-describedby={errors.alt ? "image-error" : undefined}
          />
        </div>
      )}
      <div className="mt-4">
        <Label htmlFor="shortDescription">Short Description</Label>
        <Controller
          name="shortDescription"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextEditor value={value || ""} setValue={onChange} />
          )}
        />
        <RenderError error={errors.shortDescription?.message} />
      </div>
      <div className="mt-4">
        <Label htmlFor="longDescription">Short Description</Label>
        <Controller
          name="longDescription"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextEditor value={value || ""} setValue={onChange} />
          )}
        />
        <RenderError error={errors.longDescription?.message} />
      </div>
      <FormAction
        reset={() => resetForm()}
        loading={loading}
        setImages={setImages}
      />
    </form>
  );
}
