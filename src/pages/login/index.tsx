import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginSchema, LoginFormData } from "@/schemas/schema";
import axiosClient from "@/axios/axios-client";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import { getToken, setToken } from "@/services/localStorageService";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { fetchUser } from "@/redux/features/user-slice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});

	const dispatch = useAppDispatch();

	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const token = getToken();
		if (token) {
			setIsAuthenticated(true);
			router.push("/dashboard");
		}
	}, []); //eslint-disable-line

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const onSubmit = async (data: LoginFormData) => {
		setLoading(true);
		try {
			const response = await axiosClient.post("/login", data);
			setLoading(false);
			if (response.status === 200) {
				const { token } = response.data;
				if (token) setToken(token);
				dispatch(fetchUser({}))
				router.push("/dashboard");
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	if (!isAuthenticated) {
		return (
			<div className="bg-primary/5">
				<div className="container flex items-center justify-center min-h-screen">
					<Card className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-md">
						<CardHeader className="py-0">
							<CardTitle className="text-3xl font-bold text-center">
								Login
							</CardTitle>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										type="email"
										placeholder="Enter your email"
										{...register("email")}
										className={errors.email ? "border-red-500" : ""}
										aria-invalid={errors.email ? "true" : "false"}
										aria-describedby={errors.email ? "email-error" : undefined}
									/>
									{errors.email && (
										<p id="email-error" className="text-sm text-red-500">
											{errors.email.message}
										</p>
									)}
								</div>
								<div className="space-y-2">
									<Label htmlFor="password">Password</Label>
									<div className="relative">
										<Input
											id="password"
											type={showPassword ? "text" : "password"}
											placeholder="Enter your password"
											{...register("password")}
											className={`pr-10 ${
												errors.password ? "border-red-500" : ""
											}`}
											aria-invalid={errors.password ? "true" : "false"}
											aria-describedby={
												errors.password ? "password-error" : undefined
											}
										/>
										<button
											type="button"
											onClick={togglePasswordVisibility}
											className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
											aria-label={
												showPassword ? "Hide password" : "Show password"
											}
										>
											{showPassword ? (
												<EyeOffIcon className="w-5 h-5" />
											) : (
												<EyeIcon className="w-5 h-5" />
											)}
										</button>
									</div>
									{errors.password && (
										<p id="password-error" className="text-sm text-red-500">
											{errors.password.message}
										</p>
									)}
								</div>
								<Button type="submit" className="w-full" disabled={loading}>
									{loading ? "Logging In..." : "Log In"}
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		);
	}
}

Login.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout>{page}</Layout>;
};
