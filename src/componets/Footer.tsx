export const Footer = () => {
  return (
    <div className=" mx-auto w-full flex md:flex-row flex-col items-center md:justify-between py-8  px-20  ">
      <div className="text-black dark:text-white/70 flex items-center flex-none">
        Powered by <span className="mx-1 font-bold"> OpenAI</span>
        and
        <span className="ml-1 font-bold">Vercel</span>.
      </div>
      <div className="flex items-center mt-2 md:mt-0">
        <a
          className="group"
          aria-label="TaxPal on Twitter"
          href="https://twitter.com/44_chann"
        >
          <svg
            aria-hidden="true"
            className="mr-4 h-6 w-6 fill-white/50 dark:group-hover:fill-white"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
          </svg>
        </a>
        <div>
          <a
            className="my-1 flex flex-none items-center py-1 px-4 border border-black  dark:border-white/50 rounded-full text-sm  hover:bg-white/50 shadow-sm hover:text-slate-900 dark:text-white"
            href="https://github.com/chann44/Emojify"
            aria-label="Star StephDietz/watch-this on GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>

            <span className="ml-2">Star on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};
