const ModalWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed bottom-0 top-0 left-0 right-0 h-full bg-black opacity-85 flex overflow-auto text-center z-[99999] px-[5%] pt-[80px] pb-0">
      {children}
    </div>
  );
};

export default ModalWrap;
