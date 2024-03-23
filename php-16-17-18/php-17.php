<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>php-17</title>
</head>
<body>
    <?php
        echo "<h2>пункт 1</h2>";
        function makeSMTH($a, $b)
        {
            if ($a >= 0 && $b >= 0){
                echo "<h2>$a-$b</h2>>";
            }
            elseif ($a < 0 && $b < 0){
                echo "<h2>$a*$b</h2>";
            }
            else{
                echo "<h2>$a+$b</h2>";
            }
        }
        $a = -1;
        $b = -4;
        makeSMTH($a, $b);


        echo "<h2>пункт 2</h2>";

        $a = mt_rand(0, 16);
        switch ($a){
            case 0:
                echo 0;
                break;
            case 1:
                echo 1;
                break;
            case 2:
                echo 2;
                break;
            case 3:
                echo 3;
                break;
            case 4:
                echo 4;
                break;
            case 5:
                echo 5;
                break;
            case 6:
                echo 6;
                break;
            case 7:
                echo 7;
                break;
            case 8:
                echo 8;
                break;
            case 9:
                echo 9;
                break;
            case 10:
                echo 10;
                break;
            case 11:
                echo 11;
                break;
            case 12:
                echo 12;
                break;
            case 13:
                echo 13;
                break;
            case 14:
                echo 14;
                break;
            case 15:
                echo 15;
                break;
            default:
                echo 'Число от 0 до 15';
        }
        echo "<br>";




        function sum($a, $b)
        {
            return $a + $b;
        }
        function difference($a, $b)
        {
            return $a - $b;
        }
        function multiply($a, $b)
        {
            return $a * $b;
        }
        function divide($a, $b)
        {
            return $a + $b;
        }


        echo "<h2>пункт 4</h2>";

        function mathOperation($arg1, $arg2, $operation){
            switch ($operation){
                case 'сумма':
                    return sum($arg1,$arg2);
                case 'разность':
                    return difference($arg1,$arg2);
                case 'умножение':
                    return multiply($arg1,$arg2);
                case 'деление':
                    return divide($arg1,$arg2);
                default:
                    return "Операция не определена!";
            }
        }

        $result_operation = mathOperation(10, 10, "умножение");

        echo "<h2>$result_operation</h2>";

        echo "<h2>пункт 5</h2>";

        //лекции не было. но нашел на сайте PHP.net
        $first_way = date('Y');
        echo "Способ 1: <h2>$first_way</h2>";
        $second_way = localtime(null, true)['tm_year'] + 1900;
        echo "Способ 2: <h2>$second_way</h2>";
        $third_way = getdate()['year'];
        echo "Способ 3: <h2>$third_way</h2>";

        echo "<h2>пункт 6</h2>";
        function power($val, $pow)
        {
            if($pow == 1){
                return $val;
            }
            return $val * power($val, $pow-1);
        }

        $result_pow = power(2, 10);
        echo "<h2>$result_pow</h2>";
    ?>
</body>
</html>