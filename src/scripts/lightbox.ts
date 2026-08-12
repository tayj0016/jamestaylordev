import {projects} from '../data/projects';

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement | null;
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDots = document.getElementById('lightbox-dots');
const closeButton = document.getElementById('lightbox-close');
const prevButton = document.getElementById('lightbox-prev');
const nextButton = document.getElementById('lightbox-next');

let currentProject = 0;
let currentImage = 0;

function updateLightbox() {
    if (!lightboxImg || !lightboxTitle || !lightboxDots) return;

    const project = projects[currentProject];

    lightboxImg.src = project.images[currentImage];
    lightboxImg.alt = `${project.title} screenshot ${currentImage + 1}`;
    lightboxTitle.textContent = project.title;

    lightboxDots.innerHTML = '';

    project.images.forEach((_, index) => {
        const dot = document.createElement('button');

        dot.className = `w-2 h-2 rounded-full transition-colors ${
            index === currentImage ? 'bg-white' : 'bg-white/30'
        }`;

        dot.setAttribute('aria-label', `View screenshot ${index + 1}`);

        dot.addEventListener('click', () => {
            currentImage = index;
            updateLightbox();
        });

        lightboxDots.appendChild(dot);
    });

    const multipleImages = project.images.length > 1;

    if (prevButton) {
        prevButton.style.display = multipleImages ? '' : 'none';
    }

    if (nextButton) {
        nextButton.style.display = multipleImages ? '' : 'none';
    }
}

function openLightbox(projectIndex: number, imageIndex = 0) {
    if (!lightbox) return;

    currentProject = projectIndex;
    currentImage = imageIndex;

    updateLightbox();

    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');

    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    if (!lightbox) return;

    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');

    document.body.style.overflow = '';
}

document.querySelectorAll<HTMLElement>('.gallery-container').forEach(container => {
    container.addEventListener('click', () => {
        const projectIndex = Number(container.dataset.project);

        const link = container.dataset.link;
        const demo = container.dataset.demo;

        if (link) {
            window.open(link, '_blank');
            return;
        }

        if (demo) {
            window.open(demo, '_blank');
            return;
        }

        if (projects[projectIndex]?.images.length) {
            openLightbox(projectIndex);
        }
    });
});

closeButton?.addEventListener('click', closeLightbox);

prevButton?.addEventListener('click', () => {
    const total = projects[currentProject].images.length;

    currentImage = (currentImage - 1 + total) % total;

    updateLightbox();
});

nextButton?.addEventListener('click', () => {
    const total = projects[currentProject].images.length;

    currentImage = (currentImage + 1) % total;

    updateLightbox();
});

lightbox?.addEventListener('click', event => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', event => {
    if (!lightbox?.classList.contains('flex')) return;

    if (event.key === 'Escape') {
        closeLightbox();
    }

    if (event.key === 'ArrowLeft') {
        prevButton?.click();
    }

    if (event.key === 'ArrowRight') {
        nextButton?.click();
    }
});