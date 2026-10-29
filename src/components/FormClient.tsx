import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormValues } from "@/schemas/clientFormSchema";
import { Card, CardContent } from "@/components/ui/card"; 
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import texts from "@/data/texts.json";
import { ArrowRight } from "lucide-react";

const ClientForm = ({
  hasSelectedServices,
  onSaveBudget,
}: {
  hasSelectedServices: boolean;
  onSaveBudget: (data: FormValues) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const [showServiceError, setShowServiceError] = useState(false);

  const onSubmit = (data: FormValues) => {
    if (!hasSelectedServices) {
      setShowServiceError(true);
      return;
    }

    setShowServiceError(false);
    onSaveBudget(data);
    
  };

  return (
    <Card className="rounded-2xl border-0 bg-white shadow-[0_3px_8px_rgba(0,0,0,0.16)]">
      <CardContent className="p-4 md:p-6 lg:px-8">
        <h2 className="mb-4 text-xl font-extrabold text-black md:text-2xl">
          {texts.clientForm.title}
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="grid grid-cols-1 gap-4 md:grid-cols-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="sr-only">
              {texts.clientForm.nameLabel}
            </label>

            <Input
              id="name"
              placeholder={texts.clientForm.namePlaceholder}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-red-700">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="sr-only">
              {texts.clientForm.phoneLabel}
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder={texts.clientForm.phonePlaceholder}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-sm text-red-700">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="sr-only">
              {texts.clientForm.emailLabel}
            </label>
            <Input
              id="email"
              type="email"
              placeholder={texts.clientForm.emailPlaceholder}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-700">{errors.email.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full self-end bg-[#151f1b] font-semibold text-white hover:bg-[#58af8c]/90"
          >
            {texts.clientForm.submitButton}
            <ArrowRight />
          </Button>
          {showServiceError && (
            <p className="col-span-full w-full text-left text-sm text-red-500">
              {texts.clientForm.submitButtonError}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default ClientForm;
