"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLoginUser } from "@/utils/service/login/post";
import { useFormik } from "formik";
import * as Yup from "yup";
import EmailSVG from "@/components/common/svg/email";
import Password from "@/components/common/svg/password";
import Button from "@/components/common/auth/button";
import InputAuth from "@/components/common/auth/input-auth";
import OrUnderline from "@/components/common/auth/or-underline";
import WelcomeTitle from "@/components/common/auth/welcome-title";
import GithubSVG from "@/components/common/svg/github";
import { login } from "@/lib/actions/auth";
import { createUser } from "@/lib/actions/user";
import { JwtPayload } from "@/types/user";
import { getClientCookie } from "@/utils/service/storage/client-cookie";
import { jwtDecode } from "jwt-decode";

/**
 * Login user component
 *
 * @component
 * @returns {JSX.Element} - Rendered Login
 */

function LoginContainer() {
  // Hooks
  const { mutate } = useLoginUser();
  const t = useTranslations("Auth");
  const token = getClientCookie("clientAccessToken");
  const decoded = typeof token == "string" && jwtDecode<JwtPayload>(token);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required("ایمیل الزامی است"),
    password: Yup.string().required("رمز عبور الزامی است"),
  });

  // Posting user email and password logic
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (value) => {
      await mutate(value);
      try {
        if (decoded) await createUser(decoded.id, decoded.email, decoded.name);
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Page header */}
      <WelcomeTitle
        created_at={new Date().toISOString()}
        id={Math.random().toString()}
        title={t("loginTitle")}
        desc={t("loginDesc")}
        caption=""
        imageSrc=""
        imageTitle=""
      />
      {/* Login options */}
      <div className="flex flex-col flex-wrap gap-[20px]">
        <button
          onClick={() => login()}
          type="button"
          className="h-[48px] text-text border border-border rounded-2xl flex items-center justify-center gap-2 text-[16px] font-bold cursor-pointer transition-all dark:bg-white"
        >
          {/* Login with github */}
          <span>{t("google")}</span>
          <GithubSVG />
        </button>
        <OrUnderline />
        {/* Login inputs */}
        <InputAuth
          text={t("email")}
          placeHolder={t("emailDesc")}
          icon={<EmailSVG />}
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          type="text"
        >
          {formik.errors.email && (
            <span className="text-red-500 text-sm text-right">
              {formik.errors.email}
            </span>
          )}
        </InputAuth>

        <InputAuth
          text={t("password")}
          placeHolder={t("passwordDesc")}
          icon={<Password />}
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        >
          {formik.errors.password && (
            <span className="text-red-500 text-sm text-right">
              {formik.errors.password}
            </span>
          )}
        </InputAuth>
        <Button
          text={t("loginAccount")}
          created_at={new Date().toISOString()}
          id={Math.random().toString()}
          caption=""
          imageSrc=""
          imageTitle=""
        />
      </div>
      <div className="flex justify-center mt-2 gap-[5px]">
        <span className="text-[14px] font-[500] underline text-[#586CFF] dark:text-[#8b9bff]">
          <Link href="/auth/register/step-1">{t("SignUpTitle")}</Link>
        </span>
        <span className="text-[14px] font-[500] text-[#222] dark:text-[white]">
          {t("NoAccount")}
        </span>
      </div>
    </form>
  );
}

export default LoginContainer;
