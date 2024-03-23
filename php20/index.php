<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>List Item</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<script src="script.js"></script>
<?php
    /*$menu = array(
        "name" => "Каталог товаров",
        "hasChildren" => true,
        "items" => array(
            array(
                "name" => "Мойки",
                "hasChildren" => true,
                "items" => array(
                    array(
                        "name" => "Ulgran",
                        "hasChildren" => true,
                        "items" => array(
                            array(
                                "name" => "проверка",
                                "hasChildren" => false,
                                "items" => array()
                            ),
                            array(
                                "name" => "Smth",
                                "hasChildren" => false,
                                "items" => array()
                            )
                        )
                    ),
                    array(
                        "name" => "Vigro Mramor",
                        "hasChildren" => false,
                        "items" => array()
                    ),
                    array(
                        "name" => "Handmade",
                        "hasChildren" => true,
                        "items" => array(
                            array(
                                "name" => "Smth",
                                "hasChildren" => false,
                                "items" => array()
                            ),
                            array(
                                "name" => "Smth",
                                "hasChildren" => false,
                                "items" => array()
                            )
                        )
                    )
                )
            ),
            array(
                "name" => "Фильтры",
                "hasChildren" => true,
                "items" => array(
                    array(
                        "name" => "Ulgran",
                        "hasChildren" => true,
                        "items" => array(
                            array(
                                "name" => "Smth",
                                "hasChildren" => false,
                                "items" => array()
                            ),
                            array(
                                "name" => "Smth",
                                "hasChildren" => false,
                                "items" => array()
                            )
                        )
                    ),
                    array(
                        "name" => "Vigro Mramor",
                        "hasChildren" => false,
                        "items" => array()
                    )
                )
            )
        )
    );*/

    include 'config.php';
    $conn_string = getStringConn();
    $conn = pg_connect($conn_string);

    $query = "SELECT * FROM menu";
    $result = pg_query($conn, $query);
    pg_close($conn);
    $menu_db_table = pg_fetch_all($result);

    $first_el_table = $menu_db_table[0];
    $menu = ["name" => $first_el_table["name"], "hasChildren" => $first_el_table["has_children"], "items" => []];



    $menu["items"] = buildMenu($menu_db_table, $first_el_table['id']);

    function buildMenu($items, $parentId)
    {
        $item_childrens = [];
        foreach ($items as $item)
        {

            if ($item["parent_id"] === $parentId)
            {
                $children = [];
                $children["name"] = $item["name"];

                if($item["has_children"] == "t")
                {
                    $children["hasChildren"] = true;
                    $children["items"] = buildMenu($items, $item['id']);
                }
                elseif ($item["has_children"] == "f")
                {
                    $children["hasChildren"] = false;
                    $children["items"] = [];
                }

                $item_childrens[] = $children;
            }
        }
        return $item_childrens;
    }

    $menu_container = render($menu);
    echo '<div class="list-items" id="list-items">' . $menu_container .'</div>';
    function render($data)
    {
        $menu = '<div class="list-item list-item_open" data-parent><div class="list-item__inner">' .
            '<img class="list-item__arrow" src="img/chevron-down.png" alt="chevron-down" data-open>' .
            '<img class="list-item__folder" src="img/folder.png" alt="folder">' . '<span>' . $data['name'] . '</span>' .
            '</div>' . '<div class="list-item__items">';

        foreach ($data["items"] as $item)
        {
            if ($item["hasChildren"])
            {
                $menu .= render($item);
            }
            else
            {
                $menu .= '<div class="list-item__inner">' .
                    '<img class="list-item__folder" src="img/folder.png" alt="folder">' . '<span>' . $item['name'] . '</span>' .
                    '</div>';
            }
        }

        $menu .= '</div></div>';
        return $menu;
    }
?>
</body>
</html>