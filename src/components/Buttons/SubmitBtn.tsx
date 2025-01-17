function SubmitBtn({ type = "등록" }: { type: string }) {
  return (
    <button className="w-full py-3 bg-black text-white text-sm font-semibold rounded-full">
      {type}하기
    </button>
  );
}

export default SubmitBtn;
