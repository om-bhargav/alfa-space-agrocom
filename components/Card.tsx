import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Card = ({ ...props }) => {
  const pathName = usePathname();
  return (
    <div className="bg-white transition duration-300 hover:border-[#7c2528] border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
      {/* Image */}
      <img
        src={props.image || "/wheatflour.png"}
        alt="Product Name"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h3 className="text-lg font-bold text-gray-800 mb-2">{props.title || "Product Name"}</h3>

        {/* Specifications */}
        {/* <ul className="text-sm text-gray-600 mb-4">
          <li>Specification 1: Value</li>
          <li>Specification 2: Value</li>
          <li>Specification 3: Value</li>
        </ul> */}
        <div className="text-sm text-gray-600 mb-4">
          {props.description}
        </div>
        {/* View Details Button */}
        <Link href={`/products/${props.category}/${props._id || "123"}`} className="w-full bg-[#7c2528] text-white py-2 px-4 rounded-lg hover:bg-[#5e1c1f] transition">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
