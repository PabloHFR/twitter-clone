import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

export function SidebarTweetButton() {
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const router = useRouter();

  const signInHandler = useCallback(() => {
    if (!currentUser) {
      loginModal.onOpen();
    } else {
      router.push("/");
    }
  }, [loginModal, currentUser]);

  return (
    <div onClick={signInHandler}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <FaFeather size={24} color="white" />
      </div>
      <div className="mt-6 hidden lg:block rounded-full px-4 py-2 bg-sky-500 hover:bg-opacity-90 transition cursor-pointer">
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          Tweet
        </p>
      </div>
    </div>
  );
}
