define([], function(){
    'use strict';

    var INTERVAL_INCREASE = 150;
    
    var Trumpets = {
        //Draw Raphael background and append to DOM
        drawBackground: function(){
            var bg;

            $('.animation-content').append('<div class="trumpets"></div>');
            bg = $('.trumpets')[0];

            this.paper = new Raphael(bg, '100%', '100%'); 

            Trumpets.drawTrumpets();
        },

        //Draw the three trumpets based on SVG coordinates
        //Push them to a trumpets array
        drawTrumpets: function(){
            var upperTrumpet = this.paper.path('M 125.6 26.7 C 115.7 47.6 121.1 78.4 140.7 111.5 C 146.3 121.2 152.3 137.8 154.7 150.9 C 156.5 160.4 155.8 170.7 152.9 181.4 C 150.7 189.7 145.1 202.3 143.5 203 C 141.7 203.9 126.9 194.7 117.8 187.2 L 108.7 179.6 L 110.9 175.3 C 113.7 169.5 113.3 165.2 109.6 160.6 C 104.6 154.4 102.6 154.8 95 163.6 C 87.1 173 82.6 180.9 82.8 185 C 82.9 187.7 82.4 188.7 80.6 189.6 C 76.8 191.6 69.9 201.9 66.1 211.1 C 64.2 215.8 61.2 223.1 59.3 227.4 C 52.4 242.4 48.6 262.3 52 265.2 C 54.8 267.6 60.1 265.8 64 261.2 C 67.5 257 67.5 257 71.8 258.9 C 85 264.9 92.5 268.7 92.5 269.5 C 92.5 270 84.8 279.5 75.5 290.6 L 58.6 310.7 L 54.7 311 C 50.7 311.4 48 313.5 47.7 316.7 C 47.7 317.8 46.4 319.7 44.9 320.8 C 37.7 326.7 23.3 327.4 8.6 322.5 L 0 319.5 L 1.4 323.5 C 4.1 331.2 11.6 343.9 18.5 352.8 C 27 363.6 47 379.5 57.8 384.2 C 66.2 388 82.5 392.7 91 393.9 L 97.4 394.9 L 93.2 389.7 C 82.5 376.5 75.6 351.2 80.6 344 C 82.3 341.7 82.4 340.1 81.3 338.1 C 78.9 333.4 78.8 332 80.4 324.8 C 82 317.7 86.4 307.7 91.4 300 L 94.2 295.5 L 95 303.6 C 96.3 316.1 101.6 326.1 111.7 334.8 C 119.1 341.1 120.8 342 126 342.7 C 134.7 343.6 150.3 339.5 160.2 333.7 C 164.7 331 173.4 324.8 179.6 319.7 C 185.6 314.6 191.2 310.4 191.8 310.2 C 192.6 310.1 195.7 311 198.8 312.1 C 203.7 313.7 205 313.7 206.7 311.7 C 207.8 310.5 210.9 307.2 213.7 304.4 L 218.9 299.4 L 213.5 297.4 C 206.4 294.8 206.5 295 209.5 291.5 C 212 288.6 212.6 288.5 218.2 290.5 L 224.3 292.6 L 229.8 286.1 C 232.8 282.6 235.3 279.2 235.3 278.7 C 235.3 278.2 233.1 276.8 230.2 275.9 C 223.2 273.3 223.2 273.3 225.7 267.7 C 226.9 265.1 228.1 262.5 228.2 262.1 C 228.4 261.5 231.6 262.5 235.5 264 C 239.2 265.5 242.8 266.6 243.3 266.3 C 244.3 265.9 252.4 252.1 252.5 250.8 C 252.5 250.4 247.9 248.5 242.2 246.3 L 231.9 242.4 L 231 235.2 C 229 218.8 215.8 201.3 200.3 194.4 C 196.4 192.6 193.3 190.9 193.3 190.6 C 193.3 190.2 196.9 188.6 201.3 187.1 L 209.5 184.4 L 219.6 190.8 C 250.8 210.9 284.2 221.8 310.5 220.7 C 333.7 219.7 350.9 209.4 357.8 192.2 C 379 139.5 315.1 48.8 231.3 12.6 C 182.2 -8.4 139.5 -2.8 125.6 26.7Z M 151.4 11.3 C 168.6 3.8 197.4 6.1 224.3 17.3 C 274.6 38.1 322.7 82.5 344.1 127.4 C 363.5 168 357.3 200.4 328.1 211.4 C 304 220.4 262.8 210.3 224 185.9 C 207.9 175.7 182.3 153.9 169.5 139.6 C 141.1 107.4 125.5 72.7 127.4 46.2 C 128.7 30.2 137.4 17.5 151.4 11.3Z M 99.4 164.7 C 101.6 163.1 103 163.1 104.4 164.2 C 107.4 166.8 107.7 170.1 105.5 176 C 103.7 181.1 103.8 181.7 106.7 184.3 C 115.1 192 127.1 200.4 138.3 206.3 C 140.8 207.8 140.9 208 138.4 210.2 C 137 211.5 135.5 212.6 134.9 212.6 C 133.1 212.6 109.5 197.3 103.7 192.4 C 99.2 188.6 97 187.4 95.3 188 C 89.5 190 87.8 182.5 92.2 174 C 96.1 166.7 95.8 167 99.4 164.7Z M 82.3 195 C 83.7 194.6 85.1 194.6 85.4 194.8 C 86.2 195.5 86.8 201.4 86.6 206.8 L 86.4 211.8 L 102.2 220.8 C 122.2 232 121.5 231.4 118.3 235.1 C 115.1 238.9 115.6 239 99.2 229.7 C 80.2 219.1 80.6 219.3 78.9 221.2 C 76.5 224.1 73.6 224.3 71 222.1 C 67.9 219.4 68.4 215.5 73.1 206.4 C 77.7 197.4 79.1 195.7 82.3 195Z M 95.4 192.9 C 96.5 192.6 99.4 194.2 101.9 196.3 C 104.5 198.5 112 203.6 118.6 207.7 C 125.2 211.9 131 215.6 131.5 216 C 132.2 216.6 131.2 218.4 128.6 221.4 C 123.9 227 125.2 227.2 106.5 215.6 L 92.6 207.1 L 92.6 200.8 C 92.5 193.8 92.6 193.5 95.4 192.9Z M 68.2 228 C 68.8 229.2 69.6 232.8 69.9 236 L 70.4 241.9 L 85.3 248.8 C 93.4 252.6 100.5 256.2 101.1 256.6 C 101.7 257.2 100.9 258.6 98.5 261.1 L 95 264.8 L 83.6 259 C 77.2 255.9 70.6 252.6 69 251.8 C 66.4 250.5 65.8 250.7 64.3 253.2 C 62.4 256.5 57.7 259.3 56.3 258.1 C 55.1 257.1 56 247.8 57.6 243 C 59.2 238.7 63.7 230.2 65.6 227.8 C 66.9 226.1 67.4 226.2 68.2 228Z M 82.9 226.8 C 83.1 227 89.5 230.5 97.3 234.5 C 105 238.6 111.6 242.2 111.9 242.5 C 112.9 243.3 107.1 251.1 105.7 250.9 C 105.1 250.7 98.7 247.6 91.7 244.2 C 79.8 238.2 78.9 237.4 78.2 234.4 C 77.8 231.8 78.2 230.4 80.1 228.8 C 81.4 227.5 82.7 226.6 82.9 226.8Z M 176.9 157.8 C 184.7 165.5 193.7 173.5 196.8 175.4 C 200 177.6 202.3 179.5 202 179.8 C 201.7 180.3 197.7 182.4 193 184.9 C 187.5 187.8 182.4 189.4 177.8 189.8 C 171.7 190.3 159.3 194.7 153.9 198.4 C 152.4 199.3 152.7 198.1 154.8 193.4 C 160.9 179.7 164.4 159 162.4 147.4 C 162 145.5 161.9 144 162.2 143.9 C 162.5 143.7 169.1 150 176.9 157.8Z M 30.5 334.3 C 33.4 334 38.7 332.3 42.3 330.4 C 48.6 327 48.8 327 50.8 330 C 51.8 331.7 56.6 336.3 61.1 340.4 L 69.5 347.5 L 70.6 357 C 71.2 362.6 73.2 369.7 75.3 373.9 L 78.9 381.1 L 50.9 358.1 C 35.7 345.3 23.5 334.9 24.1 334.8 C 24.7 334.7 27.6 334.5 30.5 334.3Z M 143.6 211.6 C 160.9 196.8 179.4 192.9 198.5 200.2 C 221.7 209.2 232.2 238.4 221.6 265.3 C 216.8 277.6 207.8 289 189.7 305.5 C 167.6 325.9 153.5 334.8 139.4 337.5 C 129.4 339.4 122.8 337.9 115.9 332.1 C 105.4 323.2 101.8 314.9 100.6 297.3 C 100 288.9 100.2 287.5 103.1 283.5 C 104.9 281.1 106.5 279.2 106.6 279.3 C 106.8 279.4 107 282.5 107.1 286.4 C 107.4 290.2 108.8 297.1 110.1 301.9 C 112.6 310.2 112.9 310.7 121.8 318.2 C 130.3 325.5 131.3 326 136.8 326.2 C 151.2 326.5 175.8 309.9 200.4 283.2 C 210.9 271.8 211.3 271.1 214 263.9 C 221.1 245.3 219.1 226.5 209.1 216.1 C 197.6 203.9 178.4 200.7 164.5 208.3 C 153 214.9 143.3 223.6 129.4 240.3 C 116.1 256.1 87.3 294.7 81 305.2 C 76.9 312.1 73.4 321.5 71.5 330.9 L 70.1 338.1 L 67.6 337.1 C 64.8 335.9 60.1 330.7 57.4 325.1 L 55.4 321.5 L 73.4 300.3 C 85.5 286 96 272.8 105.2 259.8 C 128 228 135.3 218.9 143.6 211.6Z M 148.7 226 C 148.9 226 155.2 229 162.8 232.9 C 175.4 239.5 187 244.6 204.3 251.9 C 208 253.4 211.3 255.3 211.5 256 C 212.1 257.4 209.4 265.9 208.4 266.3 C 206.5 266.6 144.6 237.9 141.3 235.1 C 139.6 233.7 139.8 233.5 144 229.9 C 146.4 227.8 148.6 226 148.7 226Z M 139 241.1 C 145.6 244.5 174.4 258 185.2 262.9 C 196.6 268.1 203.5 273.8 201.4 276.3 C 200.1 277.9 172.7 267.2 148.8 255.7 C 129.9 246.6 129.7 246.4 133 242.5 C 135.3 239.8 136 239.6 139 241.1Z M 130.5 252 C 147.6 260.7 162.3 267.7 178 274.4 C 188.3 278.7 196.7 282.6 196.8 282.8 C 196.8 283.2 195.2 284.7 193.4 286.3 L 190.2 289.1 L 170 280.9 C 153.3 274.2 138 267.4 123 260 C 120.7 258.7 120.7 258.6 124 254.6 C 127.2 250.8 127.7 250.7 130.5 252Z M 133.8 272 C 142.9 276.4 155.9 282.4 162.6 285.4 C 174.4 290.4 182.4 295.6 181.1 297.1 C 180.6 297.7 179.6 298.2 178.7 298.7 C 176.8 299.6 143.8 287.6 125.9 279.6 C 114.3 274.2 113.3 273.5 113.4 271.1 C 113.5 269.6 114.5 267.3 115.5 266.2 C 117.1 264.3 118.8 264.8 133.8 272Z M 158 219.1 C 159.1 218.6 168.9 222.1 180.9 227.3 C 213.5 241.1 212.4 240.5 212.9 244.9 C 213.4 248.3 213.2 248.6 211.3 248.3 C 206.8 247.4 157.4 225.5 154.6 223.1 C 153.8 222.4 155.5 220.2 158 219.1Z M 173.7 210.9 C 181.8 208.3 196.9 212.3 204.9 219.1 C 208.1 221.8 209.9 224.8 211.3 229 C 212.3 232.4 212.8 235.2 212.5 235.3 C 211.7 235.5 173.5 219.1 168.5 216.2 C 164 213.8 164.1 213.8 173.7 210.9Z M 113.6 278.1 C 115.6 279.8 153.6 296.4 161.4 299.1 C 167.3 301.1 172.5 303 173 303.4 C 174 304.2 166.6 309.5 156.7 314.9 C 147.5 319.8 138.5 321.7 133.3 319.8 C 127.2 317.6 119.7 310.5 116.1 303.6 C 113.1 297.4 110.7 281.1 112.5 278.9 C 113 278.4 113.5 278 113.6 278.1Z'),
                middleTrumpet = this.paper.path('M 424.6 89.9 C 422.3 91 422.3 91.4 423.3 98.4 C 424.3 104.5 424 108.1 421.9 120 C 413.7 164.9 398.2 193.8 367.7 220.2 C 357.1 229.4 356.5 229.8 298.4 273.7 C 288.8 281 279.6 288 278 289.4 C 276.3 290.9 275 291.4 274.4 290.8 C 274.1 290.4 272.6 290.1 271.2 290.4 C 269.9 290.6 268.8 290.4 268.7 289.9 C 268.6 289.4 267.1 287.8 265.4 286.4 C 262.6 284 262.4 283.5 263 280.6 C 264.1 275.7 262.6 274.2 257.9 275.7 C 253.5 277.1 246.9 283.1 246.9 285.8 C 246.8 288.9 249.5 290.4 253 289.2 C 255.9 288.2 256.6 288.4 259.5 291.5 C 262.5 294.7 262.7 295 261.4 296.9 C 260.7 298.1 260.3 299.8 260.4 300.6 C 260.8 302.6 251.7 310.2 250.3 309.1 C 249.7 308.7 248.1 308.6 246.7 308.9 C 244.9 309.2 243.2 308.3 240.7 305.8 C 237.5 302.6 237.4 302.3 238.4 300 C 240.1 296.4 239.4 294 236.3 293.2 C 231.1 291.9 221.5 300.9 222.9 305.7 C 223.6 308 224.1 308.2 227.1 307.6 C 230.1 307 231.2 307.4 234.4 310.5 C 237.2 313.2 238.1 314.4 237.4 315.4 C 236.9 316 236.6 317.6 236.7 318.8 C 237 321.4 227 329.9 225.9 327.9 C 225.5 327.4 224 327 222.6 327.3 C 220.6 327.5 219.1 326.8 216.3 323.7 C 212.9 319.8 212.8 319.7 214.2 317.5 C 216 314.7 214.2 312.2 210.7 312.3 C 205.8 312.4 196.8 319.7 197.3 323.1 C 197.8 325.4 201.3 327.1 203.7 326.2 C 205.6 325.5 206.6 326 209.6 329.3 C 212.8 333 213.1 333.5 211.9 334.7 C 211 335.7 210.8 337 211.5 338.3 C 212.2 340 211.6 340.9 207.7 343.7 C 205.2 345.7 200.9 349 198.2 351.3 C 195.6 353.6 189.9 358.1 185.7 361.4 C 174.1 370.4 166.2 377.9 161.8 384.4 C 158 389.9 149.8 397.1 134.1 408.7 C 128 413.4 126.3 414.2 124.6 413.5 C 122.1 412.6 119.9 414.2 117.8 418.4 C 116.3 421.3 115.8 421.6 109.5 422.7 C 105.8 423.2 100.5 423.7 97.9 423.8 C 93.5 423.7 92.9 424.1 91.1 426.4 C 88.1 430.4 89.2 433.6 95.6 440.4 C 98.8 443.7 102.9 448.6 104.8 451.2 C 108.6 456.6 112.2 458.7 115.2 457.2 C 117.5 456 118.4 453.5 119 446.1 C 119.3 441.5 120.1 439.3 122.9 435.9 C 125.6 432.5 126.7 431.7 127.9 432.4 C 130 433.5 135.7 429.2 135.3 426.8 C 135 425.2 141.4 419.9 154 411.4 L 160.1 407.4 L 162 415.8 C 163.6 423.1 164.6 425.3 168.7 431.1 C 180.8 447.9 201.1 457 216.6 452.8 C 226.2 450.1 241.3 440.9 254.1 429.9 C 275.2 411.7 291.6 398.7 318.8 378.8 C 365.7 344.4 369.6 340.8 373.6 327.1 C 376.3 317.7 375.8 310.9 371.6 302.7 C 368.1 295.8 361.6 287.7 355.8 283.1 C 353.9 281.5 352.2 279.9 352.1 279.5 C 351.9 278.3 392.1 249.2 398.6 245.9 C 418.8 235.1 436.1 229.6 457.1 226.7 C 470.4 225 505.1 223.3 522.8 223.6 C 532.4 223.8 534 223 535.6 217.2 C 536.5 214.2 536.3 212.9 534.7 209.6 C 527.7 194.4 492.4 147.8 467.1 120.1 C 452.1 103.6 434.1 88.3 430.6 88.9 C 430.1 89 429.1 89 428.3 88.9 C 427.5 88.8 425.9 89.2 424.6 89.9Z M 439.9 96.2 C 455.6 107.7 483.6 138.9 510.3 175.1 C 531.6 203.6 536.9 213.8 533.5 218.8 C 531.7 221.5 529.4 222.4 525.2 222 C 523.9 221.9 521.4 219.4 518.1 214.9 C 515.3 211.1 510 204.2 506.2 199.5 C 496.9 188.1 494.5 185.2 487.4 176.4 C 484.1 172.2 479.4 166.7 477.1 164 C 474.7 161.4 463.4 147.8 451.9 134 C 440.3 120.1 431 109.4 431.2 110.2 C 431.3 111 432.4 112.7 433.7 114.2 C 435 115.7 438.6 120.1 441.7 124 C 444.8 127.9 453.1 137.9 460.1 146.2 C 499.8 193.2 521.3 220.6 519.2 221.4 C 518.5 221.8 508.2 222.1 496.4 222.4 C 476.4 222.8 473 223.1 450.1 227.1 C 426.3 231.3 425.1 231.6 414.6 236.3 C 399 243.2 389.6 249 369 264.4 L 350.8 278.1 L 344.2 276.2 C 337.7 274.3 337.2 274.3 324.2 276.6 C 311.5 278.8 310.5 279.2 300.9 284.5 C 295.5 287.5 287.9 292.1 284 294.6 C 280.1 297.2 276.9 299.3 276.8 299.2 C 276.7 299.1 276.6 297.4 276.5 295.4 C 276.4 292 276.7 291.5 285.4 285 C 346.5 239.4 363.4 226.1 376.7 213.6 C 388.5 202.3 392.7 197.2 399.9 184.8 C 414.1 160.2 419.4 145.1 423.8 117.1 C 425.6 105.5 425.7 102.6 424.5 98.8 C 422.5 92.7 423 91.3 427.4 90.5 C 430.8 89.9 432 90.5 439.9 96.2Z M 334.3 276.3 C 346.3 276.4 355.9 282.4 365.6 295.7 C 371.8 304.2 374.4 310.7 373.9 316.9 C 373.4 324.3 369.1 336 365.3 340.3 C 360.9 345.3 350.2 354.2 337.8 363 C 305 386.3 285.1 401.6 260.7 422.3 C 246 434.8 230.7 445.5 223.2 448.9 C 212.4 453.5 201.3 453.2 190.5 447.8 C 174.7 440 162.8 424.3 162.5 411.2 C 162.4 407.2 162.8 406.5 165.7 404.5 C 174.3 398.9 199.7 380.3 207.3 374.1 C 217.9 365.5 283.7 316.5 296.3 307.8 C 308.2 299.5 321.1 292.2 326.7 290.4 C 330.2 289.3 327.8 291.3 313.4 301.9 C 303.2 309.3 293.9 315.4 291.2 316.4 C 288.1 317.5 285.4 319.3 283.5 321.7 C 278.5 327.8 269 334.4 264.1 335.2 C 260 336 257.3 338.3 255.8 342.2 C 254.7 345.1 244.3 351.9 239.6 352.7 C 235.2 353.5 231.8 356.4 231.1 359.9 C 231 360.5 222.5 367.7 212.1 375.8 C 188.7 394.2 184.2 398.4 182.3 403.9 C 180.4 409.3 181.2 414.1 185.1 420.7 C 190.8 430.4 201.6 435.5 212.3 433.6 C 217.4 432.7 226.9 426.9 244.6 413.9 C 256.2 405.3 257.4 404.6 263 403.8 C 268.7 403 269.2 402.7 272 398.8 C 273.6 396.6 275 393.9 275.1 392.7 C 275.3 389.9 284.7 382.8 286.5 384 C 287.2 384.5 289.2 384.7 291 384.4 C 294.9 383.7 298.5 379.3 297.9 375.8 C 297.6 374 298.7 372.7 303.4 369.2 C 308.8 365.3 309.4 365.1 312.1 365.9 C 313.8 366.5 316.1 366.8 317.3 366.6 C 319.9 366.1 323.6 360.1 323.1 357.1 C 322.8 355.4 325.2 353.1 336.7 344.4 C 360.4 326.3 364.8 317.8 357.9 303.8 C 354.5 297 347.4 291.1 340.1 289 C 331.4 286.4 323.6 288.5 310 296.9 C 300.4 302.8 234.3 351.2 193 382.7 C 182.2 391 168 401 161.4 405.1 C 154.9 409.1 146 415 141.7 418.2 L 134 423.9 L 130.5 419.9 C 128.6 417.7 127.2 415.7 127.4 415.6 C 127.5 415.4 133 411.3 139.3 406.3 C 168.7 383.8 185.2 371 199.7 359.5 C 208.2 352.7 218.5 344.7 222.4 341.8 C 226.4 338.9 235.4 331.9 242.6 326.3 C 289.6 289.7 314.7 276 334.3 276.3Z M 237.9 295.8 C 238.4 296.5 238 298.3 237 299.8 L 235.3 302.3 L 239.2 306 C 243 309.6 243 309.8 241.4 311.5 C 240 313.1 239.4 313 235.9 310.1 C 233.8 308.4 232.2 306.3 232.3 305.5 C 232.6 304.4 232.2 304.3 231 305 C 227.7 307.2 224.5 307.3 223.8 305 C 222.3 300.2 235.4 291.5 237.9 295.8Z M 342 291.3 C 351.1 295.5 357.2 302.7 358.7 311.3 C 360.5 321.4 355.3 328.5 335.8 343.4 C 328.5 349.1 322.3 353.6 322.1 353.4 C 314.7 343.9 295.9 317.1 296.2 316.5 C 297.6 314.6 332.5 290 334.6 289.5 C 335.9 289.2 339.3 290 342 291.3Z M 213.2 314.3 C 214.5 315.5 214.5 315.9 212.8 317.7 L 210.8 319.9 L 214.6 323.6 C 219.1 328.1 219.4 329.2 216.5 331.2 C 214.5 332.7 214.1 332.4 210.9 328.8 C 209.1 326.6 207.9 324.3 208.2 323.6 C 208.5 322.6 208.2 322.6 206.9 323.4 C 203.4 325.8 200.3 325.7 199.6 323.4 C 198.6 320.3 200.1 318.2 205.1 315.7 C 210.7 312.8 211.3 312.7 213.2 314.3Z M 307.8 335.8 C 318.9 351 321.8 355.4 321.6 357.6 C 321.2 363.3 317.5 365.8 311.7 364.3 C 309.5 363.8 305.7 359.4 295.1 345.1 L 281.3 326.5 L 283.1 324 C 285 321.5 290.3 317.6 292.4 317.1 C 293.1 317 300.1 325.4 307.8 335.8Z M 291.8 342.8 C 298 351.4 304.3 359.6 305.6 361.1 L 308 363.9 L 302.8 368 C 297.8 371.8 297.3 372 296.2 370.6 C 290.3 362.8 278.9 348.1 274.8 342.9 C 272 339.5 269.7 336.3 269.6 335.9 C 269.6 335.5 278.7 328 280 327.4 C 280.1 327.4 285.4 334.4 291.8 342.8Z M 216.2 342 C 218.3 343.2 218.8 344.2 217.3 344.4 C 216.7 344.5 208.6 350.7 199.1 358.1 C 168.9 382 162.7 386.7 162.1 386.3 C 161.4 385.8 167.8 378.5 174.1 372.8 C 179.4 367.9 212.8 341.2 213.7 341 C 214 341.1 215.1 341.5 216.2 342Z M 278 349.3 C 283.7 356.8 290.4 365.5 292.8 368.5 C 296.3 373.1 297 374.5 296.6 376.9 C 296.3 378.6 295 380.7 293.8 381.7 C 291.8 383.3 291 383.6 288.1 382.8 C 285 382.3 283 379.9 270.7 363.2 C 258.3 346.4 256.8 344 257.5 341.9 C 258.4 339.1 261.2 337 264.8 336.2 C 267.2 335.7 268.3 336.9 278 349.3Z M 282.7 382.4 C 282.9 382.8 281.1 384.8 278.8 386.5 C 276.4 388.3 274.3 389.9 274 390.1 C 273 390.8 245.8 356.3 245.4 354 C 245.3 353.3 247.5 351 250.4 348.9 L 255.5 345.1 L 269 363.1 C 276.4 373.1 282.6 381.8 282.7 382.4Z M 252 365.9 C 256.8 372.4 263.6 380.8 267 384.7 C 270.5 388.5 273.4 392.3 273.5 393 C 273.6 393.7 272.4 395.9 270.8 397.9 C 268.6 400.8 266.9 401.8 263.9 402.3 L 259.9 403 L 253.1 393.3 C 249.3 388 243 378.8 239.1 372.9 L 231.9 362.3 L 233.2 358.9 C 234.3 356.1 235 355.6 238.8 354.9 L 243.3 354.1 L 252 365.9Z M 241.7 379.2 C 247 387.2 252.9 395.6 254.7 398 L 257.9 402.3 L 245.1 411.8 C 228.9 423.8 218.9 430.3 214.3 431.9 C 209.1 433.7 200 432.2 194.6 428.7 C 185.9 423 180.8 410.4 184.2 403 C 185.1 400.9 188.4 397.1 191.4 394.4 C 202.1 385 230.2 363.5 231.1 364.2 C 231.5 364.5 236.3 371.3 241.7 379.2Z M 102.4 425 C 107.8 425.5 109.8 425.3 113.8 423.6 C 118.3 421.6 118.6 421.7 120.7 423.5 C 121.8 424.6 123.6 426.6 124.4 428.1 C 125.9 430.3 125.9 430.9 124.7 431.8 C 120.2 435.4 118.1 439.5 117.5 444.9 C 116.7 454.2 116.2 455.5 113.6 456 C 110.8 456.5 109.2 455.2 105 449.2 C 103.2 446.6 99.3 442 96.3 439.1 C 89.5 432.4 88.8 429.8 93.1 426.3 C 95.3 424.5 94.6 424.5 102.4 425Z'),
                lowerTrumpet = this.paper.path('M 413 284.7 C 394.4 299.1 384.6 326.5 386.2 360 C 386.6 369.7 384 385.4 379.9 397 C 377.1 405.4 371.6 413.9 364 421.9 C 358.1 428.2 347.3 437 345.5 437.1 C 343.5 437.3 334.8 425.2 330.4 416.2 L 325.9 407.1 L 329.9 404.2 C 335.1 400.2 336.8 396.5 335.7 391.5 C 334.2 384.9 332.2 384.6 321.4 389.7 C 310 395.2 302.3 400.4 300.6 403.9 C 299.4 406.1 298.5 406.8 296.5 407 C 292.2 407.6 281.2 414.1 273.6 420.6 C 269.7 424 263.6 429.1 259.9 432.1 C 246.8 442.6 234 458.1 235.7 461.5 C 237 464.3 242.5 464.4 248.1 461.8 C 253.2 459.3 253.2 459.3 256.1 462.2 C 264.8 471.1 269.6 476.6 269.3 477.2 C 269 477.6 257.8 483.2 244.4 489.7 L 220 501.5 L 216.4 500.5 C 212.7 499.6 209.3 500.6 207.6 503.2 C 207 504 205 505.3 203.2 505.8 C 194 508.5 181.1 504.8 170.5 496.2 L 164.3 491.2 L 163.6 495 C 162.4 502.2 163 515 164.9 524.5 C 167.2 536 177.3 555.3 184.6 562.5 C 190.2 568.1 202.4 577 209.2 580.5 L 214.4 583.2 L 213.2 577.7 C 210 563.5 215.8 540.3 223.7 535.8 C 226.3 534.4 227.1 533.1 227 531.1 C 227.2 526.4 227.7 525.3 232.6 519.7 C 237.3 514.3 245.8 507.3 253.9 502.3 L 258.5 499.5 L 255.4 506.4 C 250.6 517.3 250.6 527.2 255.3 537.4 C 258.9 544.9 259.9 546.2 264.2 548.3 C 271.4 551.7 287.1 553 298.6 551.1 C 303.8 550.2 314.4 547.7 322.2 545.3 C 329.9 542.8 336.8 541 337.4 541 C 338.1 541.2 340.5 542.8 342.7 544.7 C 346.3 547.5 347.4 547.9 349.8 546.8 C 351.3 546 355.7 544.3 359.5 542.8 L 366.3 540.2 L 362.6 536.8 C 357.6 532.5 357.5 532.8 361.8 530.7 C 365.4 529 365.9 529.1 370 532.5 L 374.4 536.1 L 382.2 532.3 C 386.6 530.3 390.3 528.2 390.5 527.8 C 390.8 527.4 389.5 525.6 387.5 523.9 C 382.4 519.6 382.4 519.6 387.3 515.8 C 389.6 514 391.8 512.1 392.1 511.8 C 392.6 511.4 395 513.2 397.7 515.6 C 400.2 518 402.8 519.9 403.5 519.9 C 404.5 519.8 418.1 510.8 418.9 509.7 C 419.1 509.4 415.9 506.4 411.9 502.9 L 404.7 496.5 L 407.3 490.2 C 413.3 475.9 410 457.4 399.6 447 C 396.9 444.3 395 442 395.2 441.7 C 395.4 441.4 399.3 441.1 403.9 441.2 L 412.3 441.4 L 418.2 449.8 C 436.2 475.9 460.4 495 484.1 502 C 505 508.2 525 504.7 539.1 492.4 C 582.7 454.8 569.2 360 512.5 304.7 C 479.3 272.4 439.1 264.3 413 284.7Z M 443 279.6 C 461.6 278.5 485.8 289.1 504.2 306.5 C 538.6 338.9 560.1 390.4 557.7 434.3 C 555.6 474 534.8 499.2 504 499.5 C 478.6 499.8 447 479 424.4 447 C 415.1 433.7 402.8 407.8 398.3 392.1 C 388.5 356.7 391.1 323 405.3 301.5 C 414 288.5 427.7 280.5 443 279.6Z M 324.8 391.9 C 327.5 391.3 328.7 391.6 329.4 393 C 330.8 396.1 329.5 398.9 324.9 403.2 C 320.8 406.9 320.6 407.4 321.9 410.5 C 325.7 419.4 332.3 430 339.3 438.3 C 340.9 440.3 340.9 440.5 337.6 441.6 C 335.8 442.3 333.9 442.7 333.4 442.5 C 331.9 442 318.3 422.1 315.5 416.3 C 313.3 411.8 312 410.1 310.2 410.1 C 304.1 410 306.2 403.3 314.1 397.6 C 320.9 392.6 320.5 392.8 324.8 391.9Z M 295.4 412.1 C 296.8 412.1 298.1 412.6 298.2 412.8 C 298.6 413.6 296.4 418.8 293.7 423.2 L 291.1 427.3 L 300.8 439.6 C 313.1 454.9 312.7 454.2 308.2 456.3 C 303.6 458.5 304 458.8 294 446.1 C 282.2 431.5 282.5 431.8 280.1 432.9 C 276.6 434.5 274 433.9 272.7 431.2 C 271.2 428.1 273.5 425 281.9 418.8 C 290.3 412.7 292.3 411.7 295.4 412.1Z M 308 414.2 C 309.1 414.3 310.9 416.5 312.1 419 C 313.4 421.6 317.5 428.1 321.4 433.6 C 325.2 439 328.6 443.9 328.8 444.4 C 329.1 445 327.4 446.3 323.7 448 C 316.9 451.2 318 451.8 307 436.5 L 298.8 425.2 L 301.8 420 C 305 414.1 305.2 413.9 308 414.2Z M 267.5 435.3 C 267.4 436.6 266.5 439.7 265.1 442.5 L 262.9 447.6 L 272.7 457.8 C 278 463.5 282.6 468.5 282.9 469.1 C 283.2 469.8 281.8 470.7 278.5 472.1 L 273.7 474.1 L 266.4 465.8 C 262.2 461.3 257.9 456.6 256.9 455.4 C 255.2 453.5 254.6 453.6 252.1 455.2 C 249 457.4 243.5 458.3 242.8 456.9 C 242.2 455.7 247.4 448.1 251 444.7 C 254.5 441.5 262.4 435.8 265.3 434.4 C 267.2 433.4 267.6 433.6 267.5 435.3Z M 281 438.8 C 281 438.9 285.1 443.8 290 449.5 C 294.8 455.2 298.9 460.2 299.1 460.5 C 299.6 461.5 290.7 466.3 289.7 465.7 C 289.2 465.3 285.1 460.9 280.5 455.9 C 272.9 447.3 272.4 446.4 273.3 443.7 C 274.1 441.4 275.2 440.3 277.6 439.6 C 279.3 438.9 280.9 438.6 281 438.8Z M 396.2 409.4 C 399.5 418.2 403.6 427.5 405.4 430.1 C 407.2 432.9 408.3 435.2 407.9 435.4 C 407.4 435.6 402.9 436.2 397.6 436.9 C 391.4 437.6 386.1 437.4 381.9 436.4 C 376.3 435 363.3 434.9 356.8 436.3 C 355.1 436.7 355.9 435.7 360 432.5 C 371.8 422.9 384.6 406.6 388.4 396.4 C 388.9 394.7 389.6 393.4 389.9 393.4 C 390.2 393.4 393 400.6 396.2 409.4Z M 184.2 512.6 C 186.8 513.3 192.3 513.5 196.3 513 C 203.5 512 203.7 512.1 204.1 515.1 C 204.1 516.9 206.1 522.2 208.2 526.9 L 212.2 535.4 L 208.7 543.7 C 206.6 548.5 205 555 204.8 559.1 L 204.6 566.2 L 190.9 538.6 C 183.5 523.4 177.7 511.1 178.3 511.2 C 178.8 511.3 181.5 511.9 184.2 512.6Z M 341.6 444.3 C 363.7 437.1 381.8 439.5 395.2 451.3 C 411.4 465.7 406.9 493.2 384.9 512.5 C 374.8 521.3 361.5 528.1 337.8 536.5 C 308.7 546.9 292.1 550 278.4 548.1 C 268.7 546.6 263.6 543.4 260.3 536.5 C 255.3 525.9 256 517.9 263.2 502.9 C 266.7 495.7 267.6 494.6 272 492.1 C 274.7 490.7 277 489.6 277 489.6 C 277.1 489.8 275.9 492.5 274.2 495.7 C 272.6 499 270.5 505.2 269.5 509.5 C 267.7 517.2 267.8 517.7 272 526.7 C 276.1 535.3 276.8 536 281.5 537.8 C 294 542.4 323.5 536 357.7 521.1 C 372.3 514.7 373.1 514.3 378.8 509.1 C 393.8 495.6 401 479.4 397.1 467.7 C 392.7 454.1 377.3 445.7 361.5 447.9 C 348.2 449.8 335.7 454.2 315.5 463.9 C 296.3 473.1 252.8 496.7 242.4 503.6 C 235.4 508.1 227.9 514.9 221.9 522.1 L 217.2 527.7 L 215.5 526.1 C 213.5 524.3 211.9 518.6 212.1 513.1 L 212.1 509.4 L 237.9 497.2 C 255.4 488.9 270.8 481 285 473 C 320.1 453.3 330.8 447.8 341.6 444.3Z M 339.3 457.9 C 339.4 457.9 343.6 462.3 348.4 467.8 C 356.3 477.1 364.1 484.9 376 496.1 C 378.5 498.5 380.5 501 380.4 501.7 C 380.2 503 373.8 509.4 372.7 509.3 C 370.9 509.1 330 466.6 328.4 463.2 C 327.6 461.5 327.9 461.4 333.3 459.7 C 336.4 458.7 339.1 457.8 339.3 457.9Z M 323.6 467.5 C 327.8 472.4 346.7 492.3 353.9 499.6 C 361.5 507.4 364.9 514.2 361.9 515.6 C 359.9 516.5 340.9 499.4 325.3 482.7 C 313 469.4 312.8 469.2 317.7 466.9 C 321 465.3 321.6 465.4 323.6 467.5Z M 310.9 474 C 321.8 486.5 331.5 496.7 342.2 507 C 349.2 513.7 354.8 519.4 354.7 519.7 C 354.5 519.9 352.4 520.7 350.2 521.5 L 346 523 L 332.1 510.1 C 320.5 499.4 310.3 489.1 300.6 478.5 C 299.1 476.7 299.2 476.6 304.1 474.3 C 308.6 472.1 309.1 472.1 310.9 474Z M 304.4 491.7 C 310.4 498.1 319 507 323.4 511.5 C 331.5 519.3 336.1 526 334.2 526.9 C 333.5 527.2 332.4 527.4 331.3 527.5 C 329.2 527.6 305.9 507.7 293.9 495.7 C 286.3 487.7 285.7 486.8 286.9 484.9 C 287.8 483.6 289.7 482.1 291.1 481.4 C 293.3 480.3 294.6 481.2 304.4 491.7Z M 350.6 454.9 C 351.8 454.8 358.9 460.7 366.9 468.6 C 389.1 489.9 388.4 489.1 386.7 492.9 C 385.7 495.8 385.3 496.1 383.8 495.2 C 380.3 493.1 347.2 460 345.8 457.2 C 345.4 456.3 347.9 455.1 350.6 454.9Z M 368.3 452.7 C 376.7 453 388.1 460.9 391.9 468.9 C 393.4 472.2 393.6 475.2 392.9 479.1 C 392.2 482.3 391.3 484.8 391 484.7 C 390.2 484.7 364.4 459.5 361.3 455.6 C 358.4 452.2 358.6 452.3 368.3 452.7Z M 283.8 490.8 C 284.8 492.8 310.3 518 315.9 522.6 C 320.2 526.1 323.9 529.2 324.1 529.7 C 324.6 530.7 315.6 532.8 304.3 534.3 C 293.9 535.7 285.1 534.6 281.5 531.4 C 277.1 527.8 273.8 519.6 274 512.8 C 274.2 506.7 279.8 492.4 282.4 491.1 C 283.1 490.8 283.7 490.6 283.8 490.8Z');
                
            this.trumpets = [];
            this.trumpets.push(upperTrumpet, middleTrumpet, lowerTrumpet);
        },

        //Keep calling animateTrumpets as long as it is less than 5 times
        //Delay each call by the interval
        setupAnimationTimers: function(trumpet){
            var that = this;

            this.trumpetAnimationCounter = 0;
            this.interval = INTERVAL_INCREASE;

            this.initializeAnimation(trumpet);

            _.delay(function(){
                if(that.trumpetAnimationCounter < 5){
                    that.trumpetInterval = setInterval(function(){
                        that.animateTrumpets(trumpet);
                    }, INTERVAL_INCREASE * 2);
                }
            }, this.interval);

            this.lastAnimation(trumpet);
        },

        //The first animation starts small and makes the trumpets bigger
        initializeAnimation: function(trumpet){
            trumpet.animate({'transform':'s1.2 1.2'}, INTERVAL_INCREASE);
            
            _.delay(function(){
                trumpet.animate({'transform':'s0.8 0.8'}, INTERVAL_INCREASE);
            }, this.interval);
        },

        //This animates the trumpets from bigger to smaller and increases
        //the animationCounter
        animateTrumpets: function(trumpet){
            var transformBigOptions = {'transform':'s1.2 1.2'},
                transformSmallOptions = {'transform':'s0.8 0.8'};

            _.delay(function(){
                trumpet.animate(transformBigOptions, INTERVAL_INCREASE);
            }, this.interval += INTERVAL_INCREASE);

            _.delay(function(){
                trumpet.animate(transformSmallOptions, INTERVAL_INCREASE);
            }, this.interval += INTERVAL_INCREASE);

            this.trumpetAnimationCounter++;
        },

        //The last bit at the animation, also hides the trumpets when finished
        lastAnimation: function(trumpet){
            var that = this;

            _.delay(function(){
                trumpet.animate({'transform':'s1.3 1.3'}, INTERVAL_INCREASE);
            }, 1850);

            _.delay(function(){
                that.hideTrumpets(trumpet);
            }, 2000);
        },

        //Hides the trumpets in the DOM and resets the counter & interval
        hideTrumpets: function(){
            $('.trumpets').addClass('hidden');
            window.clearInterval(Trumpets.trumpetInterval);
            
            this.trumpetAnimationCounter = 0;
            this.interval = 0;
        }, 

        //Shows the trumpets in the DOM and starts animation
        showTrumpets: function(){
            $('.trumpets').removeClass('hidden');
            Trumpets.trumpets.forEach(function(trumpet){
                trumpet.attr({'fill':'#FFD700','stroke':'1px'});
                Trumpets.setupAnimationTimers(trumpet);
            });
        }
    };

    return Trumpets;
});