#!/usr/bin/env bash
cd RXApi
screen -S RxApi -X kill
screen -S RXApi ./TsAu
