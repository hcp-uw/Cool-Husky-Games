import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <>
      <footer className="mt-10 h-full min-h-[382px] w-screen bg-[#39275B]/80 px-10 text-white md:mt-12 md:px-0 lg:mt-16 xl:mt-20 2xl:mt-24">
        <div className="mx-auto flex max-w-7xl flex-col pt-4 md:ml-24 md:flex-row lg:justify-between lg:pt-10 xl:pt-16 2xl:pt-20">
          <section className="flex flex-col gap-y-3">
            <h1 className="text-xl lg:text-2xl xl:text-3xl">
              Cool Husky Games
            </h1>
            <p>Your favorite classic games with a UW twist.</p>
            <ul className="flex flex-row items-center gap-x-4">
              {/* Instagram */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C11.1908 5.838 10.3895 5.99739 9.6419 6.30705C8.8943 6.61672 8.215 7.07061 7.64281 7.64281C7.07061 8.215 6.61672 8.8943 6.30705 9.6419C5.99738 10.3895 5.838 11.1908 5.838 12C5.838 12.8092 5.99738 13.6105 6.30705 14.3581C6.61672 15.1057 7.07061 15.785 7.64281 16.3572C8.215 16.9294 8.8943 17.3833 9.6419 17.6929C10.3895 18.0026 11.1908 18.162 12 18.162C13.6343 18.162 15.2016 17.5128 16.3572 16.3572C17.5128 15.2016 18.162 13.6343 18.162 12C18.162 10.3657 17.5128 8.79841 16.3572 7.64281C15.2016 6.48721 13.6343 5.838 12 5.838ZM12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16ZM18.406 4.155C18.2168 4.155 18.0295 4.19226 17.8547 4.26465C17.68 4.33704 17.5212 4.44315 17.3874 4.57691C17.2537 4.71068 17.1475 4.86947 17.0752 5.04424C17.0028 5.21901 16.9655 5.40633 16.9655 5.5955C16.9655 5.78467 17.0028 5.97199 17.0752 6.14676C17.1475 6.32153 17.2537 6.48032 17.3874 6.61409C17.5212 6.74785 17.68 6.85396 17.8547 6.92635C18.0295 6.99874 18.2168 7.036 18.406 7.036C18.788 7.036 19.1544 6.88423 19.4246 6.61409C19.6947 6.34394 19.8465 5.97754 19.8465 5.5955C19.8465 5.21346 19.6947 4.84706 19.4246 4.57691C19.1544 4.30677 18.788 4.155 18.406 4.155Z"
                  fill="white"
                />
              </svg>
              {/* Discord */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="26"
                viewBox="0 0 30 26"
                fill="none"
              >
                <path
                  d="M25.3966 2.121C23.4516 1.12206 21.399 0.409701 19.2902 0.00176571C19.271 -0.00224641 19.2511 0.000618729 19.2334 0.0099539C19.2157 0.0192891 19.2012 0.0346193 19.1917 0.0537657C18.9121 0.621645 18.6582 1.20494 18.4311 1.80144C16.1258 1.41522 13.8314 1.41522 11.5734 1.80144C11.3685 1.25118 11.0659 0.578493 10.801 0.0537657C10.7912 0.035002 10.7765 0.0199951 10.759 0.010715C10.7414 0.00143489 10.7217 -0.00168471 10.7026 0.00176571C8.59366 0.408887 6.54108 1.12128 4.5965 2.121C4.57986 2.12896 4.56583 2.14251 4.55636 2.15977C0.666924 8.65977 -0.39871 15.0009 0.123966 21.2627C0.12543 21.2781 0.129664 21.2931 0.136417 21.3066C0.143169 21.3202 0.1523 21.3321 0.163262 21.3416C2.72932 23.45 5.21467 24.7297 7.65439 25.5782C7.67337 25.5845 7.69361 25.5842 7.71241 25.5772C7.73122 25.5703 7.74768 25.5571 7.7596 25.5394C8.33808 24.6584 8.85066 23.7256 9.29214 22.7503C9.29814 22.737 9.30155 22.7223 9.30215 22.7074C9.30275 22.6924 9.30053 22.6775 9.29562 22.6636C9.29072 22.6497 9.28324 22.6371 9.27369 22.6266C9.26413 22.6161 9.25271 22.608 9.24016 22.6029C8.43178 22.2567 7.64919 21.8394 6.89974 21.3549C6.88612 21.3459 6.87469 21.3333 6.86646 21.3182C6.85822 21.3031 6.85343 21.2859 6.85251 21.2683C6.85159 21.2506 6.85457 21.233 6.86119 21.2169C6.8678 21.2009 6.87785 21.1869 6.89044 21.1762C7.04763 21.0443 7.20481 20.9072 7.35523 20.7687C7.36864 20.7564 7.38485 20.7486 7.40202 20.7461C7.41919 20.7436 7.43665 20.7465 7.45242 20.7545C12.3619 23.2618 17.6769 23.2618 22.5285 20.7545C22.5443 20.746 22.5619 20.7426 22.5794 20.7449C22.5968 20.7471 22.6133 20.7549 22.6269 20.7673C22.7773 20.9058 22.9345 21.0443 23.093 21.1762C23.1056 21.1868 23.1157 21.2007 23.1224 21.2167C23.1291 21.2328 23.1321 21.2504 23.1313 21.268C23.1305 21.2857 23.1258 21.3028 23.1176 21.318C23.1095 21.3331 23.0981 21.3458 23.0845 21.3549C22.337 21.8434 21.5539 22.2604 20.7437 22.6014C20.7311 22.6068 20.7197 22.6151 20.7102 22.6257C20.7007 22.6364 20.6933 22.6491 20.6885 22.6632C20.6837 22.6772 20.6815 22.6922 20.6822 22.7072C20.6829 22.7223 20.6865 22.7369 20.6926 22.7503C21.1414 23.7202 21.6532 24.6519 22.2238 25.538C22.2354 25.5561 22.2518 25.5697 22.2707 25.5768C22.2896 25.584 22.31 25.5843 22.329 25.5777C24.7802 24.7297 27.2659 23.4495 29.832 21.3416C29.843 21.3325 29.8522 21.3209 29.8589 21.3075C29.8656 21.2942 29.8697 21.2794 29.8709 21.2641C30.4962 14.0243 28.823 7.73558 25.4355 2.16024C25.4271 2.14216 25.4131 2.12807 25.3962 2.12053L25.3966 2.121ZM10.0248 17.4501C8.54721 17.4501 7.32904 15.9322 7.32904 14.0673C7.32904 12.2029 8.52354 10.6845 10.0248 10.6845C11.5388 10.6845 12.7451 12.2161 12.7214 14.0673C12.7214 15.9322 11.5265 17.4501 10.0248 17.4501ZM19.9937 17.4501C18.5157 17.4501 17.2979 15.9322 17.2979 14.0673C17.2979 12.2029 18.492 10.6845 19.9937 10.6845C21.5072 10.6845 22.7135 12.2161 22.6895 14.0673C22.6895 15.9322 21.5072 17.4501 19.9937 17.4501Z"
                  fill="white"
                />
              </svg>
              {/* GitHub */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M0 16C0 23.5019 5.1584 29.808 12.1333 31.5339C12.4533 31.616 12.8107 31.3312 12.8 31.0005V24C12.8 23.6448 13.0101 23.3045 13.4005 23.0997C13.7952 22.9024 13.6992 22.1867 13.2672 22.1003C11.2405 21.6949 9.51253 20.8811 8.29973 19.7995C7.08907 18.7168 6.4 17.4016 6.4 16C6.4 15.024 6.7488 14.0875 7.3664 13.2331C7.4304 13.1456 7.46453 13.0411 7.46667 12.9344V7.83253L11.7013 10.0992C11.8315 10.1696 11.9925 10.1813 12.1333 10.1312C13.3205 9.7792 14.6112 9.6 16 9.6C17.3888 9.6 18.6795 9.7792 19.8667 10.1333C20.0075 10.1835 20.1685 10.1707 20.2997 10.1013L24.5333 7.83253V12.9312C24.5355 13.0379 24.5707 13.1445 24.6336 13.232C25.2523 14.0853 25.6 15.024 25.6 15.9989C25.6 17.4016 24.912 18.7168 23.7013 19.7995C22.4875 20.8811 20.7573 21.6939 18.7339 22.0992C18.3008 22.1845 18.2059 22.8992 18.6005 23.0976C18.9899 23.3024 19.2 23.6416 19.2 23.9979V30.9984C19.1893 31.3291 19.5477 31.6139 19.8667 31.5317C26.8427 29.808 32 23.5008 32 16C32 7.17013 24.8299 0 16 0C7.17013 0 0 7.17013 0 16ZM16 1.06667C24.2539 1.06667 30.9333 7.74613 30.9333 16C30.9333 22.752 26.4107 28.3168 20.2667 30.1653V24C20.2667 23.5733 20.1024 23.1936 19.8667 22.8661C21.6405 22.3787 23.2608 21.6128 24.432 20.5664C25.8197 19.3323 26.6667 17.7493 26.6667 16C26.6667 14.8448 26.2464 13.7877 25.6 12.832V6.93333C25.6032 6.56 25.1243 6.27947 24.8 6.4672L19.8997 9.09867C18.6837 8.768 17.3824 8.53333 16 8.53333C14.6187 8.53333 13.3152 8.76587 12.1003 9.09867L7.2 6.46827C6.87573 6.28053 6.3968 6.56107 6.4 6.9344V12.8331C5.7536 13.7888 5.33333 14.8459 5.33333 16.0011C5.33333 17.7504 6.18133 19.3323 7.56693 20.5664C8.74027 21.6139 10.3616 22.3797 12.1323 22.8683C11.8976 23.1947 11.7333 23.5723 11.7333 24.0011V25.8016C10.5707 26.2347 9.80587 26.3275 9.33333 26.2347C8.82347 26.1344 8.54827 25.872 8.23467 25.4347C7.6032 24.5568 6.98347 22.9387 4.93333 22.4096C4.23573 22.2229 4 23.2629 4.66667 23.4443C6.2752 23.8603 6.592 24.9888 7.36533 26.0683C7.7536 26.6069 8.3104 27.1061 9.13387 27.2683C9.81973 27.4027 10.6507 27.3003 11.7333 26.9344V30.1664C5.59147 28.3179 1.06667 22.752 1.06667 16C1.06667 7.74613 7.74613 1.06667 16 1.06667Z"
                  fill="white"
                />
              </svg>
            </ul>
            <p className="font-semibold">Beta v0.1.0</p>
            <span>
              &copy; {new Date().getFullYear()} Cool Husky Games. All rights
              reserved.
            </span>
          </section>
          <section className="mr-24 mt-6 flex flex-1 flex-row gap-x-4 md:justify-end">
            <ul className="flex flex-col gap-y-2">
              <Link className="transition-all hover:text-white/80" to="/">
                Home
              </Link>
              <Link className="transition-all hover:text-white/80" to="/games">
                Games
              </Link>
              <Link className="transition-all hover:text-white/80" to="/faq">
                FAQ
              </Link>
              <Link className="transition-all hover:text-white/80" to="/about">
                About
              </Link>
            </ul>
            <ul className="flex flex-col gap-y-2">
              <Link
                className="transition-all hover:text-white/80"
                to="/changelog"
              >
                Changelog
              </Link>
              <Link
                className="transition-all hover:text-white/80"
                to="/settings"
              >
                Settings
              </Link>
              <Link
                className="transition-all hover:text-white/80"
                to="/termsofservice"
              >
                Terms of Service
              </Link>
              <Link
                className="transition-all hover:text-white/80"
                to="/privacypolicy"
              >
                Privacy Policy
              </Link>
            </ul>
          </section>
        </div>
      </footer>
    </>
  );
}
