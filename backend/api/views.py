import json

from django.http import JsonResponse
from django.views.decorators.http import require_GET, require_POST
from api.models import Journal
from django.core import serializers

# add, list, update, delete 

@require_GET
def listJournals(request):  
  journals = Journal.objects.all()

  return JsonResponse(json.loads(serializers.serialize('json', journals)), safe=False)

def journalAction(request, id):
  print(id)

  if request.method == "GET": # get journal by id
    journal = Journal.objects.get(pk=id)
    return JsonResponse(json.loads(serializers.serialize('json', [journal]))[0], safe=False)

  if request.method == "POST": # delete journal by id
    Journal.objects.get(pk=id).delete()
    return JsonResponse({'detail': 'Successfully deleted journal'})
  
  if request.method == "UPDATE": # update journal by id
    # fuck this lol
    return JsonResponse({'detail': 'Successfully updated journal'})

  return JsonResponse({'detail': 'Invalid protocol'})

@require_POST
def addJournal(request):
  data = json.loads(request.body)
  title = data.get('title')
  rating = data.get('rating')
  entry = data.get('entry')

  Journal.objects.create(
    title=title,
    rating=rating,
    entry=entry
  ).save()
  
  return JsonResponse({'detail': 'Successfully created journal'})

