export default function Modal({ openModal }) {
  return (
    <dialog className="w-96" open={openModal}>
      <div className=" bg-emerald-950 fixed top-0 py-7 px-4 mt-4 rounded-xl">
        <h2 className="text-white mb-2">Message Sent!</h2>
        <p className="text-white">
          Thanks for completing the form. We&apos;ll be in touch soon!
        </p>
      </div>
    </dialog>
  );
}
