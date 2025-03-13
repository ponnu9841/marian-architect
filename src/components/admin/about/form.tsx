import axiosClient from "@/axios/axios-client";
import ImageUpload from "@/components/imageUpload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { useAppSelector } from "@/redux/hooks/use-selector";
import { AboutFormData, aboutSchema } from "@/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import FormAction from "@/components/admin/form-action";
import { fetchAbout } from "@/redux/features/about-slice";
import TextEditor from "@/components/ui/text-editor";
import RenderError from "@/components/render-error";

export default function AboutForm() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AboutFormData>({
    resolver: zodResolver(aboutSchema),
  });

  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.rootReducer.about);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<ExtendedFile[]>([]);
  const [existingImage, setExistingImage] = useState("");

  const onSubmit = (data: AboutFormData) => {
    setLoading(true);
    const form = new FormData();
    form.append("id", data.id || "");
    form.append("title", data.title);
    form.append("title_badge", data.titleBadge);
    form.append("alt", data.alt || "");
    form.append("short_description", data.shortDescription || "");
    form.append("long_description", data.longDescription || "");
    if (images.length > 0) {
      form.append("image", images[0]);
    }
    if (!data.id) {
      axiosClient
        .post("/about", form)
        .then((response) => {
          if (response.status === 200) {
            dispatch(fetchAbout());
            resetForm();
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    } else {
      axiosClient
        .put("/about", form)
        .then((response) => {
          if (response.status === 200) {
            dispatch(fetchAbout());
            resetForm();
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    }
  };

  const resetForm = () => {
    reset();
    setImages([]);
    setExistingImage("");
  };

  useEffect(() => {
    if (data) {
      reset({
        id: data.id,
        alt: data.alt || "",
        title: data.title,
        titleBadge: data.title_badge,
        shortDescription: data.short_description,
        longDescription: data.long_description || "",
      });
      setExistingImage(data.image);
    }
  }, [data]); //eslint-disable-line

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register("id")} />
        <div className="mt-4">
          <Label htmlFor="image">Image</Label>
          <ImageUpload
            images={images}
            setImages={setImages}
            existingImage={existingImage}
          />
        </div>

        <div className="mt-4">
          <Label htmlFor="alt">Image Alt</Label>
          <Input
            {...register("alt")}
            type="text"
            name="alt"
            id="alt"
            className={errors.alt ? "border-red-500" : ""}
            aria-invalid={errors.alt ? "true" : "false"}
            aria-describedby={errors.alt ? "title-error" : undefined}
          />
        </div>

        <div className="mt-4">
          <Label htmlFor="title">Title</Label>
          <Input
            {...register("title")}
            type="text"
            name="title"
            id="title"
            className={errors.title ? "border-red-500" : ""}
            aria-invalid={errors.title ? "true" : "false"}
            aria-describedby={errors.title ? "title-error" : undefined}
          />
        </div>

        <div className="mt-4">
          <Label htmlFor="titleBadge">Title Badge</Label>
          <Input
            {...register("titleBadge")}
            type="text"
            name="titleBadge"
            id="titleBadge"
            className={errors.titleBadge ? "border-red-500" : ""}
            aria-invalid={errors.titleBadge ? "true" : "false"}
            aria-describedby={errors.titleBadge ? "title-error" : undefined}
          />
        </div>

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
          <Label htmlFor="longDescription">Long Description</Label>
          <Controller
            name="longDescription"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextEditor value={value || ""} setValue={onChange} />
            )}
          />
          <RenderError error={errors.longDescription?.message} />
        </div>

        <FormAction reset={resetForm} loading={loading} />
      </form>
    </div>
  );
}
