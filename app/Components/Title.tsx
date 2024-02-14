export default function Title(props: any) {
  return (
    <div className="py-7 px-12 bg-white">
      <h2 className="text-[40px] font-bold uppercase text-[#14213d]">{props.textTitle}</h2>
      {props.children}
    </div>
  )
}
