import axiosClient from "@/axios/axios-client";
import ImageUpload from "@/components/imageUpload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fetchBanner } from "@/redux/features/banner-slice";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { useAppSelector } from "@/redux/hooks/use-selector";
import { BannerFormData, bannerSchema } from "@/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormAction from "@/components/admin/form-action";

export default function BannerForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BannerFormData>({
    resolver: zodResolver(bannerSchema),
  });

  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.rootReducer.banner);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<ExtendedFile[]>([]);

  const onSubmit = (data: BannerFormData) => {
    setLoading(true);
    const form = new FormData();
    form.append("alt", data.alt || "");
    if (images.length > 0) {
      form.append("image", images[0]);
    }
    axiosClient
      .post("/banner", form)
      .then((response) => {
        if (response.status === 200) {
          dispatch(fetchBanner());
          resetForm();
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const resetForm = () => {
    reset();
    setImages([]);
  };

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchBanner(controller));
    return () => controller.abort();
  }, []); //eslint-disable-line

  return (
    <div>
      {data.length < 3 ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <Label htmlFor="image">Image</Label>
            <ImageUpload images={images} setImages={setImages} />
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

          <FormAction reset={resetForm} loading={loading} />
        </form>
      ) : (
        <div className="text-center text-2xl">
          Max. no of banner added. Delete one to add
        </div>
      )}
    </div>
  );
}
