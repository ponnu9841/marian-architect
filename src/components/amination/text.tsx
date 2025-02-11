import { motion } from "framer-motion";

function AnimateText({ text }: { text?: string }) {
	const textArray = text?.split(" ");

	return (
		<div className="font-normal">
			{textArray?.map((el, i) => (
				<motion.span
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						duration: 0.25,
						delay: i / 6,
					}}
					key={i}
				>
					{`${el} `}
				</motion.span>
			))}
		</div>
	);
}

export default AnimateText;
