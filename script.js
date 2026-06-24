const PIX_KEY = "11970160550";
const modal = document.getElementById("paymentModal");
const selectedProduct = document.getElementById("selectedProduct");

function openPayment(product, price){
  selectedProduct.textContent = `${product} • ${price}`;
  modal.style.display = "flex";
  if("Notification" in window){
    Notification.requestPermission().then(permission=>{
      if(permission === "granted"){
        new Notification("ULTRA TEAM+", { body: `Pix pronto para copiar: ${PIX_KEY}` });
      }
    });
  }
}
function closePayment(){ modal.style.display = "none"; }
function copyPix(){ navigator.clipboard.writeText(PIX_KEY); alert("Chave Pix copiada: " + PIX_KEY); }
window.addEventListener("click", e=>{ if(e.target === modal) closePayment(); });
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];
function resize(){ canvas.width = innerWidth; canvas.height = innerHeight; }
function createParticles(){ particles = Array.from({length:80},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+0.6,dx:(Math.random()-.5)*0.45,dy:(Math.random()-.5)*0.45})); }
function animate(){ ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p=>{p.x+=p.dx;p.y+=p.dy;if(p.x<0||p.x>canvas.width)p.dx*=-1;if(p.y<0||p.y>canvas.height)p.dy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle="rgba(192,132,252,.75)";ctx.fill();}); requestAnimationFrame(animate); }
resize();createParticles();animate();addEventListener("resize",()=>{resize();createParticles();});
