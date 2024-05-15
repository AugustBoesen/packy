export default function Footer() {
  return (
    <footer className="fixed bottom-0 font-semibold left-0 w-full h-14 p-4 flex justify-between items-center bg-transparent backdrop-filter backdrop-blur-sm">
      <span className="text-center">Made by Visiönäärit 2024</span>
      <div className="cursor-pointer">
        <a href="https://github.com/AugustBoesen/packy" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-500 ease-in-out hover:rotate-6 hover:scale-125 hover:stroke-emerald-500"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.9.833.091-.647.349-1.088.636-1.338-2.221-.253-4.555-1.112-4.555-4.949 0-1.092.39-1.987 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.554 9.554 0 0112 6.652c.85.004 1.705.115 2.502.338 1.91-1.294 2.75-1.025 2.75-1.025.545 1.378.202 2.397.099 2.65.64.701 1.028 1.596 1.028 2.688 0 3.843-2.337 4.694-4.564 4.944.359.309.678.919.678 1.854 0 1.338-.012 2.419-.012 2.748 0 .267.18.576.688.478A9.507 9.507 0 0022 12c0-5.523-4.477-10-10-10z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
