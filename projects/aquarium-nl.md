---
title: Aquarium
date: 30 Jun 2022 00:00:00 GMT
bg: /images/project_fishtank.png
summary: Een IoT vistank die de waterhoogte monitored en automatisch kan voederen
category: iot
client: Thomas More
featured: true
---

## Introductie

Dit project was gemaakt voor het "IoT Essentials" vak aan Thomas More. Het doel was om je kennis van GPIO en Python aan te tonen. Ik heb gewerkt met meerdere componenten (stepper motor, ultrasonic sensor, lcd, buttons). Een aantal andere functies waren ook geïmplementeerd in dit project zoals phone control, live stream en het uploaden van component data naar Ubeac.

## De code

De code is niet optimaal. Het idee was om het leesbaar maar ook functioneel te houden. De [volledige code](https://github.com/syandelbart/TM-IoTEssentials-Aquarium-Public/blob/39d13a232f90d73d33709c2a4207e6071885a97d/final.py) kan gevonden worden op GitHub.

    ```python
    ps_checkbuttons = Process(target = getButtonPresses)
    ps_checkbuttons.start()

    #Set the timeout for the motor moving (=automatic feeding)
    motor_timeout = 60 * 60 * 12
    motor_now = ""

    while True:
        getCurrentTime()
        getUltrasonicReadings()
        getLampState(False,True)
        if not motor_now or time.time() - motor_now > motor_timeout:
            motorMove(motor_steps_total * 1/4,True)
            motor_now = time.time()
            motor_next_feed = time.localtime(motor_now + motor_timeout)
            drawRow(1,nextfeed + str(motor_next_feed.tm_hour) + ":" + str(motor_next_feed.tm_min))
    ```

Het meest belangrijke onderdeel is de main code. Deze code zal eerst een nieuw proces creëren voor `ps_checkbuttons`, anders zou de input van de knoppen een serieuze vertraging oplopen aangezien het zou moeten wachten op de uitvoering van andere functies. Daaronder zal er een `motor_timeout` gedefinieerd worden die de hoeveelheid tijd tussenin rotaties (voor het voederen van de vissen) zal bijhouden. Ten laatste zal het programma over de functies itereren om de huidige tijd, de gemeten afstand en de lichtstatus te updaten, en deze vervolgens op de LCD te tonen.

## Evaluatieschema

- Stepper motor drops food
- Ultrasonic measurement of depth
- Pump and light turn on/off
- Buttons
- LCD
- Ubeac upload
- Live stream
- Phone control
- Nice physical setup

## Slot

Dit project heeft me meer geleerd over GPIO, en het combineren van meerdere componenten in één functioneel programma. Voor toekomste programma zou ik de I2C stepper motor prefereren, aangezien die eenvoudiger te besturen is. Hetzelfde voor de LCD, die in dit geval een simepele display is die ook gebruikt word in (oude, baksteenlijkende) Nokia mobieltjes. Momenteel heeft elke knop zijn eigen input pin, maar voor de toekomst zou een knoppenmatrix beter zijn, aangezien nu de RPi invoer bijna volledig gevuld is... :)
