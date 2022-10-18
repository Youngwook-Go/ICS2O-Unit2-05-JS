// Copyright (c) Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: Oct 2022
// This file contains the JS functions for index1.html
"use strict"
/**
 * This function gets users hom pay.
 */

function submit() {
  // input
  const numberOfHours = parseFloat(document.getElementById("worked-hours").value)
  const hourlyRate = parseFloat(document.getElementById('hourly-rate').value)
  const TAX_RATE = 0.18

  // process
  const governmentTake = (numberOfHours * hourlyRate) * TAX_RATE
  const homePay = (numberOfHours * hourlyRate) - governmentTake

  // output
  document.getElementById('homePay').innerHTML = `Your pay will be: $ ${homePay.toFixed(2)}`
  document.getElementById('governmentTake').innerHTML = `Your government took: $ ${governmentTake.toFixed(2)}`
}

