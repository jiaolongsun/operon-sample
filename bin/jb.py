#! /usr/bin/env python
import os, glob, json as js

regex = '../app/files/genes/*.txt'

def pattern(reg):
  return glob.glob(reg)

def readFiles(path):
  files=[]
  for i in path:
    f = open(i, 'r')
    files.append([i.strip().split('\t') for i in f.readlines()][1:])
    f.close()
  return files

def writeFiles(dict):
  for name,json in dict.items():
    file = open('../app/files/json/'+name, 'wb')
    file.write(str(js.dumps(json)))
    file.close

def generateSlugs(path):
  return ['-'.join(j.lower().split('.')[0].split())+'.json' for j in [i.split('/')[-1] for i in path]]

def generateJsonString(content):
  return [{'start': line[0], 'stop': line[1], 'strand': line[2], 'number': line[3], 'list': line[4]} for line in content]

if __name__ == "__main__":

  file_contents = [generateJsonString(i) for i in readFiles(pattern(regex))]
  file_names = generateSlugs(pattern(regex))

  gene_dict = dict(zip(file_names, file_contents))

  writeFiles(gene_dict)

  print "Generated json file for every gene file"

