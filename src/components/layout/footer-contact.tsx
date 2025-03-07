import { fetchContact } from "@/redux/features/contact-slice";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { useAppSelector } from "@/redux/hooks/use-selector";
import Link from "next/link";
import { useEffect } from "react";
import {
	FaSquareFacebook,
	FaSquareInstagram,
	FaLinkedin
} from "react-icons/fa6";

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
        <>
          <div className="flex-1 text-base mb-2 flex lg:justify-center">
            <Link href={`tel:0${data.contactno_one}`}>
              {data.contactno_one ? `(+91) ${data.contactno_one}` : ""}
            </Link>
          </div>
          <div className="flex-1 text-base text-wrap break-words">
            <Link href={`mailto:${data.email_one}`} className="text-base">
              {data.email_one || ""}
            </Link>
            <div className="mt-1 flex gap-x-2">
								<div>
									<Link href="https://www.facebook.com/share/1ErxkVj6Sz/?mibextid=wwXIfr" target="_blank">
										<FaSquareFacebook
											size={25}
											className="text-muted-foreground hover:text-primary transition-all duration-300"
										/>
									</Link>
								</div>
								<div>
									<Link href="https://www.instagram.com/marian.architecture.studio/profilecard/?igsh=ZWFrMWJubTc1cWl2" target="_blank">
										<FaSquareInstagram
											size={25}
											className="text-muted-foreground hover:text-primary transition-all duration-300"
										/>
									</Link>
								</div>
								<div>
									<Link href="https://www.linkedin.com/in/ar-akhil-johny-5bb065117?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
										<FaLinkedin
											size={25}
											className="text-muted-foreground hover:text-primary transition-all duration-300"
										/>
									</Link>
								</div>
							</div>
          </div>
        </>
      )}
    </>
  );
}
