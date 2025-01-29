export default function Footer() {
  return (
    <div className="border-t border-gray-200 shadow-md p-4 flex justify-center items-center">
      <p className="text-center text-slate-400 font-semibold">
        © {new Date().getFullYear()} All rights reserved by Meals Ltd.
      </p>
    </div>
  );
}