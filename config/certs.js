document.addEventListener('DOMContentLoaded', () => {
	const certificatesGrid = document.getElementById('certificates-grid');
	const prevBtn = document.getElementById('prevBtn');
	const nextBtn = document.getElementById('nextBtn');

	if (!certificatesGrid || !prevBtn || !nextBtn) return;

	function getCardStep() {
		const firstCard = certificatesGrid.querySelector('.certificate-card');
		if (!firstCard) return 330;
		const gridStyle = window.getComputedStyle(certificatesGrid);
		const gap = parseInt(gridStyle.gap) || 25;
		return firstCard.offsetWidth + gap;
	}

	const step = getCardStep();

	prevBtn.addEventListener('click', () => {
		certificatesGrid.scrollBy({ left: -step, behavior: 'smooth' });
	});

	nextBtn.addEventListener('click', () => {
		certificatesGrid.scrollBy({ left: step, behavior: 'smooth' });
	});

	certificatesGrid.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowLeft') prevBtn.click();
		if (e.key === 'ArrowRight') nextBtn.click();
	});
});
