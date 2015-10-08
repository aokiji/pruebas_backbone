package app;
use Dancer2;

our $VERSION = '0.1';

set serializer => 'JSON';

get '/' => sub {
    send_file 'index.html';
};

get '/clientes_eolica' => sub {
    return {
        "list" => [
            {
                "nombre_cliente"                => "Chorrilandia",
                "tipo_cliente"                  => "eolica",
                "avisar_parques_sin_actualizar" => 1
            },
            {
                "nombre_cliente"                => "AERSA",
                "tipo_cliente"                  => "eolica",
                "avisar_parques_sin_actualizar" => 1
            },
            {
                "nombre_cliente"                => "Acciona",
                "tipo_cliente"                  => "eolica",
                "avisar_parques_sin_actualizar" => 1
            }
        ],
        "success" => "true"
    };
};


true;
