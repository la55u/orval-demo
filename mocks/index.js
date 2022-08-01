async function initMocks() {
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    console.log("server mock...");
    server.listen();
  } else {
    const { worker } = await import("./browser");
    console.log("browser mock...");
    worker.start();
  }
}
initMocks();
