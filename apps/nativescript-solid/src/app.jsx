const App = () => {
  function loaded(args) {
    args.object.animate({
      rotate: 360,
      duration: 7000,
      iterations: Number.POSITIVE_INFINITY,
    });
  }
  return (
    <>
      <gridlayout rows="*,auto,auto,*" class="bg-black p-10">
          <image row="1" src="https://www.solidjs.com/img/logo/without-wordmark/logo.png" class="logo" on:loaded={loaded}></image>
          <label row="2" text="Zack DeRose ready for Solid on iOS and Android too?!" class="label" textWrap="true" />
      </gridlayout>
    </>
  );
};

export { App };