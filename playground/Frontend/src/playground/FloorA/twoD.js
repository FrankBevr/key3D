const twoD = () => {
  const canvas = document.querySelector("canvas");
  canvas.width = 400;
  canvas.height = 400;
  canvas.style.background = "red";

  const ctx = canvas.getContext("2d");
  let yPos = 0;
  let direction = 1;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, yPos);
    ctx.lineTo(400, yPos);
    ctx.strokeStyle = "black";
    ctx.stroke();
    yPos += direction;
    if (yPos >= canvas.height || yPos <= 0) {
      direction *= -1;
    }
    requestAnimationFrame(animate);
  }
  animate();
};
export default twoD;
