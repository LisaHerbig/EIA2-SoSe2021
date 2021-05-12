namespace L08_2_Blumenwiese {
    window.addEventListener("load", handleLoad);
    let crc2d: CanvasRenderingContext2D;

    function handleLoad(): void {
        console.log("Hello");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2d = <CanvasRenderingContext2D>canvas.getContext("2d"); 

        drawBackground();
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2d.createLinearGradient(0, 0, 0, crc2d.canvas.height);
        gradient.addColorStop(0, "HSLA(193, 100%, 41%, 1");
        gradient.addColorStop(0.2, "HSLA(323, 100%, 51%, 1");
        gradient.addColorStop(0.4, "HSLA(55, 100%, 50%, 1");
        gradient.addColorStop(1, "HSLA(126, 100%, 39%, 1");

        crc2d.fillStyle = gradient;
        crc2d.fillRect(0, 0, crc2d.canvas.width, crc2d.canvas.height);
    }
}