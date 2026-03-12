// Book Cover

function addImage(image) {
    // Select the source tag
    const eSource = document.querySelector('picture.cover > source');
    // Set attributes for the source tag
    eSource.srcset = image.optimized;
    eSource.type = "image/avif";

    // Select the img tag
    const eImg = document.querySelector('picture.cover > img');
    // Set attributes for the img tag
    eImg.src = image.fallback;
    eImg.alt = image.alt_text;
}

// Metadata

function addTitle(title) {
    // Update the page title
    document.title = title || "Untitled Work";

    // Select the title container
    const eTitle = document.querySelector('.title');

    // If there is no title, add placeholder texts
    eTitle.innerHTML = title || "Untitled Work";
}

function addAuthor(author) {
    // Select the author name container
    const authorContainer = document.querySelector('.author');

    if (author.link) {
        // If the is an encyclopedic webpage about the author, add a link to it
        const newAnchor = document.createElement('a');
        newAnchor.href = author.link;
        newAnchor.classList.add('link');

        // If the author's name is not on the record, add placeholder texts
        newAnchor.innerHTML = author.name || "Unknown Author";

        // Add the created anchor element to the DOM
        authorContainer.appendChild(newAnchor);
    } else if (author.name) {
        authorContainer.innerHTML = author.name;
    } else {
        // If there is no information about the author, add different placeholder texts
        authorContainer.innerHTML = "Anonymous";
    }
}

function addVersion(version) {
    // Select the version container
    const versionContainer = document.querySelector('.version');

    // When the version info is not provided, add placeholder texts
    versionContainer.innerHTML = version || "Unknown Version";
}

// Main

function addContent(content) {
    // Select main and menu
    const eMain = document.querySelector('main');
    const eMenu = document.querySelector('ul#menu');

    // Loop through each chapter
    content.forEach((chapter, index) => {
        // Calculate chapter index
        const cSequence = index + 1;

        // Create an article element to hold each chapter
        const eChapter = document.createElement('article');
        eChapter.id = `chapter-${cSequence}`;
        eChapter.ariaLabel = `chapter-${cSequence}`;

        // Create an h2 element for chapter index
        const cIndex = document.createElement('h2');
        cIndex.innerHTML = `Chapter ${cSequence}`;
        // Add chapter index to the chapter container
        eChapter.appendChild(cIndex);

        // Create an h3 element for chapter title
        const cTitle = document.createElement('h3');
        cTitle.innerHTML = chapter.title;
        // Add chapter title to the chapter container
        eChapter.appendChild(cTitle);

        // Create an anchor link for menu
        const nLinkContainer1 = document.createElement('li');
        const nLinkContainer2 = document.createElement('p');
        const nLink = document.createElement('a');
        nLink.href = `#chapter-${cSequence}`;
        nLink.classList.add('link');
        nLink.innerHTML = `Chapter ${cSequence}: ${chapter.title}`;
        // Add anchor link to menu
        nLinkContainer2.appendChild(nLink);nLinkContainer1.appendChild(nLinkContainer2);
        eMenu.appendChild(nLinkContainer1);

        // Loop through the paragraphs
        chapter.paragraphs.forEach((paragraph) => {
            // Create a paragraph element for each paragraph
            const newParagraph = document.createElement('p');

            // Inject content into the paragraph element
            newParagraph.innerHTML = paragraph;

            // Add the paragraph element to the chapter container
            eChapter.appendChild(newParagraph);
        });

        // Add the chapter container to main
        eMain.appendChild(eChapter);
    });
}
