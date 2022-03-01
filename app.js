function verificarPasswords(event) {
 
    console.log(event);
    if (pass1.value !== pass2.value) {
        error.classList.remove("hide");
        error.classList.add("show");
        pass1.style.setProperty("border", "thin solid var(--error)");
        pass2.style.setProperty("border", "thin solid var(--error)");
        return

    } else {
        error.classList.remove("show");
        error.classList.add("hide");
        pass1.style.setProperty("border", "thin solid var(--ok)");
        pass2.style.setProperty("border", "thin solid var(--ok)");
        singup.disabled = true;
 
        setTimeout(function() {
            location.reload();
        }, 1000);
        return
    }
}

let singup = document.getElementById ("singup")
let error = document.getElementById("error")
let pass1 = document.getElementById('pass1');
let pass2 = document.getElementById('pass2');
singup.addEventListener ("click", verificarPasswords)


// Get the canvas node and the drawing context
const canvas = document.getElementById('canvasMatrix');
const ctx = canvas.getContext('2d');

// set the width and height of the canvas
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;

// draw a black rectangle of width and height same as that of the canvas
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

function matrix () {
	// Draw a semitransparent black rectangle on top of previous drawing
	ctx.fillStyle = '#0001';
	ctx.fillRect(0, 0, w, h);

	// Set color to green and font to 15pt monospace in the drawing context
	ctx.fillStyle = '#0f0';
	ctx.font = '20pt monospace';

	// for each column put a random character at the end
	ypos.forEach((y, ind) => {
		// generate a random character
		const text = String.fromCharCode(Math.random() * 122);

		// x coordinate of the column, y coordinate is already given
		const x = ind * 20;
		// render the character at (x, y)
		ctx.fillText(text, x, y);

		// randomly reset the end of the column if it's at least 100px high
		if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
		// otherwise just move the y coordinate for the column 20px down,
		else ypos[ind] = y + 20;
	});
}

// render the animation at 20 FPS.
setInterval(matrix, 50);