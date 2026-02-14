/* Register GSAP plugins after they load (used with defer for performance) */
if (typeof gsap !== "undefined") {
  gsap.registerPlugin(
    ScrollTrigger,
    SplitText,
    Flip,
    ScrollToPlugin,
    TextPlugin
  );
}
