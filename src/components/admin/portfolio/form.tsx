import axiosClient from "@/axios/axios-client";
import ImageUpload from "@/components/imageUpload";
import RenderError from "@/components/render-error";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fetchPortfolio } from "@/redux/features/portfolio-slice";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { useAppSelector } from "@/redux/hooks/use-selector";
import { PortfolioFormData, portfolioSchema } from "@/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormAction from "../form-action";

export default function PortfolioForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PortfolioFormData>({
    resolver: zodResolver(portfolioSchema),
  });

  const [images, setImages] = useState<ExtendedFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [existingImage, setExistingImage] = useState("");

  const dispatch = useAppDispatch();
  const { pageNo, selectedPortfolio } = useAppSelector(
    (state) => state.rootReducer.portfolio
  );

  const onSubmit = (data: PortfolioFormData) => {
    const formData = new FormData();
    if (images.length > 0) {
      formData.append("image", images[0]);
    }
    formData.append("alt", data.imageAlt || "");
    formData.append("title", data.title || "");
    formData.append("description", data.description || "");
    setLoading(true);
    if (!data.id) {
      axiosClient
        .post("/portfolio", formData)
        .then((response) => {
          if (response.status === 200) {
            successCB();
          }
        })
        .finally(() => setLoading(false));
    } else {
      formData.append("_method", "PUT");
      formData.append("id", data.id);
      axiosClient
        .post("/portfolio", formData)
        .then((response) => {
          if (response.status === 200) {
            successCB();
            
          }
        })
        .finally(() => setLoading(false));
    }
    function successCB() {
      dispatch(fetchPortfolio({ pageNo }));
      resetForm();
    }
  };
  function resetForm() {
    reset();
    setImages([]);
    setExistingImage("");
  }

  useEffect(() => {
    if (selectedPortfolio) {
      reset({
        id: selectedPortfolio.id,
        imageAlt: selectedPortfolio.alt || "",
        title: selectedPortfolio.title || "",
        description: selectedPortfolio.description || "",
      });
      setExistingImage(selectedPortfolio.image);
    }
  }, [selectedPortfolio]); //eslint-disable-line

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("id")} />
      <div className="mt-4">
        <ImageUpload
          images={images}
          setImages={setImages}
          existingImage={existingImage}
        />
      </div>
      <div className="my-4">
        <Label htmlFor="imageAlt">Image Alt</Label>
        <Input
          {...register("imageAlt")}
          type="text"
          name="imageAlt"
          id="imageAlt"
          placeholder="Image alt"
          className={errors.imageAlt ? "border-red-500" : ""}
          aria-invalid={errors.imageAlt ? "true" : "false"}
          aria-describedby={errors.imageAlt ? "image-error" : undefined}
        />
        <RenderError error={errors.imageAlt?.message} />
      </div>
      <div className="my-4">
        <Label htmlFor="title">Title</Label>
        <Input
          {...register("title")}
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className={errors.title ? "border-red-500" : ""}
          aria-invalid={errors.title ? "true" : "false"}
          aria-describedby={errors.title ? "image-error" : undefined}
        />
        <RenderError error={errors.title?.message} />
      </div>
      <div className="my-4">
        <Label htmlFor="description">Description</Label>
        <Input
          {...register("description")}
          type="text"
          name="description"
          id="description"
          placeholder="Description"
          className={errors.description ? "border-red-500" : ""}
          aria-invalid={errors.description ? "true" : "false"}
          aria-describedby={errors.description ? "image-error" : undefined}
        />
        <RenderError error={errors.description?.message} />
      </div>
      <FormAction
        loading={loading}
        reset={() => resetForm()}
      />
    </form>
  );
}
