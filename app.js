// UI variables
const mainForm = document.querySelector('#main-form');
const spinner = document.querySelector('#spinner');
const px = document.querySelector('#px');
const emRem = document.querySelector('#em-rem');
const inch = document.querySelector('#in');
const cm = document.querySelector('#cm');
const mm = document.querySelector('#mm');
const pt = document.querySelector('#pt');
const pc = document.querySelector('#pc');
const percent = document.querySelector('#percent');

// Main Event
mainForm.addEventListener('submit', e => {
  // Add ux spinner for 3 seconds
  spinner.classList.remove('d-none');
  setTimeout(() => {
    spinner.classList.add('d-none');

    // Calculate measurements
    const pxs = parseFloat(px.value);
    const calculatedEmRem = pxs / 16;
    const calculatedInche = pxs / 96;
    const calculatedCm = calculatedInche * 2.54;
    const calculatedMm = calculatedCm * 10;
    const calculatedPt = calculatedInche * 72;
    const calculatedPc = calculatedPt / 12;
    const calculatedPercent = pxs / 16 * 100;

    // Insert measurements in inputs
    emRem.value = calculatedEmRem;
    inch.value = calculatedInche;
    cm.value = calculatedCm;
    mm.value = calculatedMm;
    pt.value = calculatedPt;
    pc.value = calculatedPc;
    percent.value = calculatedPercent;

  }, 3000);

  e.preventDefault();
});
