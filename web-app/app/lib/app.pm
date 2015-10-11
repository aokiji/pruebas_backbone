package app;
use Dancer2;

our $VERSION = '0.1';

set serializer => 'JSON';

sub recurso {
    my $recurso = shift;
    my %params = @_;
    my $ruta_base = '';
    my $package = __PACKAGE__;

    if (exists $params{'namespace'}) {
        $ruta_base .= $params{'namespace'};
        $package .= "::" . $params{'namespace'};
    }

    $package .= '::controladores::' . $recurso;
    eval "require $package";

    if (my $metodo = $package->can('index')) {
        get "$ruta_base/$recurso" => $metodo;
    }

    if (my $metodo = $package->can('get')) {
        get "$ruta_base/$recurso/:id" => $metodo;
    }
}

recurso 'clientes', namespace => 'api';

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
