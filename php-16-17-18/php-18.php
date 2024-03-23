<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>php-18</title>
</head>
<body>
    <?php
        echo "<h2>пункт 1</h2>";
        function showInterval($startValue, $endValue)
        {
            if ($startValue > $endValue)
                exit("Неправильный интервал!");
            $i = $startValue;
            do
            {
                if($i == 0)
                    echo "<h2>$i - это ноль.</h2>";
                elseif ($i%2 == 0)
                    echo "<h2>$i - четное число.</h2>";
                else
                    echo "<h2>$i - нечетное число.</h2>";
                $i++;

            }
            while($i < $endValue);
        }

        showInterval(0, 10);

        echo "<h2>пункт 2</h2>";

        $localities = ['Московская область' => array('Москва','Зеленоград','Клин'),
            'Ленинградская область' => array('Санкт-Петербург','Всеволожск','Павловск','Кронштадт'),
            'Тюменская область' => array('Тюмень','Ишим','Тобольск','Заводоуковск')];

        foreach ($localities as $key => $value){
            // php.net
            $cities = implode(', ', $value);
            echo "<h2>$key: </h2>";
            echo "<h2>$cities</h2>";
        }

        echo "<h2>пункт 3</h2>";
        $translit_array = [
            'а' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd', 'е' => 'e', 'ё' => 'yo',
            'ж' => 'zh', 'з' => 'z', 'и' => 'i', 'й' => 'y', 'к' => 'k', 'л' => 'l', 'м' => 'm',
            'н' => 'n', 'о' => 'o', 'п' => 'p', 'р' => 'r', 'с' => 's', 'т' => 't', 'у' => 'u',
            'ф' => 'f', 'х' => 'kh', 'ц' => 'ts', 'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch', 'ъ' => '',
            'ы' => 'y', 'ь' => '', 'э' => 'e', 'ю' => 'yu', 'я' => 'ya'
        ];

        $russian_word = strtolower("это текст на русском языке!");
        $translit_result = '';

        for ($i = 0; $i < strlen($russian_word); $i++)
        {
            // система боль, костыль и велосипед, неэффективно, но работает
            $symbol = mb_substr($russian_word, $i, 1);
            if (array_key_exists($symbol, $translit_array))
            {
                $translit_result .= $translit_array[$symbol];
            }
            else
            {
                $translit_result .= $symbol;
            }
        }

        echo "<h2>$translit_result</h2>";

        echo "<h2>пункт 4</h2>";

        $menu = array(
                'name' => 'Каталог товаров',
                'hasChildren' => true,
                'items' => array(
                    array(
                        'name' => 'Мойки',
                        'hasChildren' => true,
                        'items' => array(
                            array(
                                'name' => 'Первый вид мойки',
                                'hasChildren' => false,
                                'items' => []
                            ),
                            array(
                                'name' => 'Второй вид мойки',
                                'hasChildren' => true,
                                'items' => array(
                                    array(
                                        'name' => 'Второй вид мойки образец 1',
                                        'hasChildren' => false,
                                        'items' => []
                                    ),
                                    array(
                                        'name' => 'Второй вид мойки образец 2',
                                        'hasChildren' => false,
                                        'items' => []
                                    )
                                )
                            )
                        )
                    ),
                    array(
                        'name' => 'Фильтры',
                        'hasChildren' => false,
                        'items' => []
                    )
                )

        );

        function renderParent($data): string
        {
            $parent = '';
            $name = $data['name'];
            $parent .= "<li>$name<ul>";
            foreach ($data['items'] as $element){
                if ($element['hasChildren']){
                    $parent .= renderParent($element);
                }
                else{
                    $parent .= renderChildren($element);
                }
            }
            $parent .= "</li></ul>";
            return $parent;
        }
        function renderChildren($data): string
        {
            $name = $data['name'];
            return "<li>$name</li>";
        }

        $result_tree = renderParent($menu);

        echo "<ul>$result_tree</ul>";
        echo "<h2>пункт 6</h2>";
        foreach ($localities as $key => $value){
            $cities = [];
            foreach ($value as $city){
                if (str_starts_with(mb_strtolower($city), 'к'))
                    $cities[] = $city;
            }
            echo "<h2>$key: </h2>";
            if (count($cities) == 0)
                echo "<h2>В этой области отсуствуют города на 'К'</h2>";
            else
            {
                $result = implode($cities);
                echo "<h2>$result</h2>";
            }

        }
    ?>

</body>
</html>
