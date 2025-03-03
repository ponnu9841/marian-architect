import { fetchContact } from "@/redux/features/contact-slice";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { useAppSelector } from "@/redux/hooks/use-selector";
import Link from "next/link";
import React, { useEffect } from "react";

export default function FooterContact() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.rootReducer.contact);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchContact(controller));
    return () => controller.abort();
  }, []); //eslint-disable-line

  return (
    <>
      {data && (
        <div className="mt-4">
          <div className="text-base mb-2">
            <Link href={`tel:0${data.contactno_one}`}>
              {data.contactno_one ? `(+91) ${data.contactno_one}` : ""}
            </Link>
          </div>
          <div className="text-base text-wrap break-words">
            <Link href={`mailto:${data.email_one}`} className="text-base">
              {data.email_one || ""}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
