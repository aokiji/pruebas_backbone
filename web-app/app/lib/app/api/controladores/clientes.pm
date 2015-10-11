package app::api::controladores::clientes;
use strict;
use warnings;
use Dancer2 qw(!get);

set serializer => 'JSON';

my %clientes = (
    'Chorrilandia' =>  {
        "nombre_cliente"                => "Chorrilandia",
        "tipo_cliente"                  => "eolica",
        "avisar_parques_sin_actualizar" => 1
    },
    'AERSA' => {
        "nombre_cliente"                => "AERSA",
        "tipo_cliente"                  => "eolica",
        "avisar_parques_sin_actualizar" => 1
    },
    'Acciona' =>  {
        "nombre_cliente"                => "Acciona",
        "tipo_cliente"                  => "eolica",
        "avisar_parques_sin_actualizar" => 1
    }
);

sub get {
    return $clientes{params->{id}};
}

sub index {
    return [values %clientes];
    
}

1;
