# spacy_NER_chrome_extension_trail
Chrome extension used to highlight entities on webpages

Folder: spacy_implement included implementation of pre-built Spacy NER models that supports NER, tokenization, etc.. and a model built from scratch that only supports NER. It was aimed at achieving the F-score of Spacy Models after employing the TB2 and Tweebank dataset, as suggested in this paper: https://arxiv.org/pdf/2201.07281.pdf

Folder: nlp_extension included files to build a chrome extension that perform NER on texts of currently opened web pages. The rest api worked well, however, it failed to run due to unsuccessful attempts to connect the content.js file to popup.js file
