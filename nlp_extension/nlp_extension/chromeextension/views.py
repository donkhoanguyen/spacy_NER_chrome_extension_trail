from django.shortcuts import render

# Create your views here.

import json
from django.contrib.auth.models import User #####
from django.http import JsonResponse , HttpResponse ####

import spacy
from spacy import displacy

def index(request):
    return HttpResponse("Spacy for NER on websites.")

def perform_ner(request):
    text = request.GET.get('text', '')
    nlp = spacy.load("en_core_web_sm")
    doc = nlp(text)

    entities = [{'text': ent.text, 'label': ent.label_} for ent in doc.ents]
    rendering = displacy.render(doc, style = "ent")


    # Prepare the response data
    data = {
        'text': text,
        'entities': entities,
        'message': 'Named Entity Recognition successful.',
    }

    return JsonResponse(data)