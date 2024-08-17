basic.showString("Lagesensor_Test")
loops.everyInterval(500, function () {
    serial.writeValue("Drehung X ", input.rotation(Rotation.Pitch))
    serial.writeValue("Drehung Y ", input.rotation(Rotation.Roll))
    serial.writeValue("Kompass ", input.compassHeading())
    serial.writeValue("Beschleunigung X ", input.acceleration(Dimension.X))
    serial.writeValue("Beschleunigung Y ", input.acceleration(Dimension.Y))
    serial.writeValue("Beschleunigung Z ", input.acceleration(Dimension.Z))
    serial.writeValue("Beschleunigung abs ", input.acceleration(Dimension.Strength))
})
basic.forever(function () {
	
})
