from sense_hat import SenseHat
import urllib
import json
from time import gmtime, strftime
import time

sense = SenseHat()

while True:
        temperature = sense.get_temperature()
        temperature = round(temperature,2)
        humidity = sense.get_humidity()
        humidity = round(humidity,2)
        pressure = sense.get_pressure()
        pressure = round(pressure,2)
        time_str =  strftime("%Y-%m-%d  %H:%M:%S", gmtime())
        u = urllib.urlopen('http://yjlo.xyz:3333/add/'+time_str+'/'+str(temperature)+'/'+str(humidity)+'/'+$
        print "["+time_str+"] uploaded: "+str(temperature)+', '+str(humidity)+', '+str(pressure)
        time.sleep(60*15)