sectest1node
============
Sorry for the misnomer, this is a meteor project.

For some reason in the past I had issues doing a simple publish subscribe in separate client/server files.

I'd get some wierd mongo error about "collectionname"/insert already exists. Perhaps somehow a declaration existed 
elsewhere, but today I can't recreate it.

Anyhow, to test this I did a very simple publish subscribe with autopublish removed.  Seems to be fine now.

I wonder what the error condition was?
