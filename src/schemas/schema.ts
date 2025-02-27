import { z } from "zod";

// Document Schema
// export const DOCUMENT_SCHEMA = z
//   .instanceof(File)
//   .refine(
//     (file) =>
//       [
//         "application/pdf",
//         "application/vnd.ms-excel",
//         "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       ].includes(file.type),
//     { message: "Invalid document file type" }
//   );

export const fileValidation = (val: unknown) => {
	if (val === null) {
		return {
			valid: false,
			issues: [
				{
					code: z.ZodIssueCode.invalid_type,
					message: "Input must be a file",
				},
			],
		};
	}
	if (val instanceof File) {
		return { valid: true, issues: [] };
	}
	return {
		valid: false,
		issues: [
			{
				code: z.ZodIssueCode.invalid_type,
				message: "Input must be a file",
			},
		],
	};
};

export const loginSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export const bannerSchema = z.object({
	alt: z.string().optional(),
});

export const partnerSchema = z.object({
	// image: z.custom<File[] | null>(fileValidation),
	imageAlt: z.string(),
});

export const serviceSchema = z.object({
	// image: z.custom<File[] | null>(fileValidation),
	id: z.string().optional(),
	alt: z.string().optional(),
	title: z.string().min(3, "Title must be at least 3 characters"),
	shortDescription: z.string().optional(),
	longDescription: z.string().optional(),
});

export const testimonialsSchema = z.object({
	// image: z.custom<File[] | null>(fileValidation),
	videoUrl: z.string().optional(),
	imageAlt: z.string().optional(),
	name: z.string().min(3, "Name must be at least 3 characters"),
	designation: z.string().min(3, "Designation must be at least 3 characters"),
	testimonial: z.string().min(3, "Testimonial must be at least 3 characters"),
});

export const portfolioSchema = z.object({
	id: z.string().optional(),
	imageAlt: z.string().optional(),
	title: z.string().optional(),
	description: z.string().optional(),
});

export const teamsSchema = z.object({
	imageAlt: z.string().optional(),
	name: z.string().min(3, "Name must be at least 3 characters"),
	designation: z.string().optional(),
	lindedInProfile: z.string().optional(),
});

export const contactSchema = z.object({
	id: z.string().optional(),
	location: z.string().min(3, "Location must be at least 3 characters"),
	contactOne: z.string().regex(/^\d{10}$/, {
		message: "Phone number must be exactly 10 digits",
	}),
	contactTwo: z
		.string()
		.optional(),
	emailOne: z
		.string()
		.min(1, { message: "This field has to be filled." })
		.email("This is not a valid email."),
	emailTwo: z.string().optional(),
});

export const aboutSchema = z.object({
	id: z.string().optional(),
	alt: z.string().optional(),
	title: z.string().min(3, "Title must be at least 3 characters"),
	titleBadge: z.string().min(3, "Title must be at least 3 characters"),
	shortDescription: z.string().min(3, "Description must be at least 3 characters"),
	longDescription: z.string().optional(),
});

export type AboutFormData = z.infer<typeof aboutSchema>;

export type ContactFormData = z.infer<typeof contactSchema>;

export type TeamsFormData = z.infer<typeof teamsSchema>;

export type PortfolioFormData = z.infer<typeof portfolioSchema>;

export type TestimonialsFormData = z.infer<typeof testimonialsSchema>;

export type ServiceFormData = z.infer<typeof serviceSchema>;

export type PartnerFormData = z.infer<typeof partnerSchema>;

export type BannerFormData = z.infer<typeof bannerSchema>;

export type LoginFormData = z.infer<typeof loginSchema>;
