<?php

// OnlyColumns
if ( ! function_exists('OnlyColumns'))
{
    function OnlyColumns($model, $removeProperties=[]):array
    {
        //set columns with \Illuminate\Support\Facades\Schema::getColumnListing($model->getTable());
        $columns = \Illuminate\Support\Facades\Schema::getColumnListing($model->getTable());

        // remove items from columns with $removeProperties
        foreach ($removeProperties as $removeProperty)
        {
            if (in_array($removeProperty, $columns))
            {
                $columns = array_diff($columns, [$removeProperty]);
            }
        }

        return $columns;
    }
}

// log
if (!function_exists('ddlog')){
    function ddlog($variable, $name = null)
    {
        $bt = debug_backtrace();
        $caller = array_shift($bt);
        $file_line = basename($caller['file']) . ":" . $caller['line'];
        $name = $name ? " Name:$name " : "";
        $dumper = 'cli' === PHP_SAPI ? new \Symfony\Component\VarDumper\Dumper\CliDumper() : new \Symfony\Component\VarDumper\Dumper\HtmlDumper();

        switch (gettype($variable)) {
            case 'object':
                $output = $file_line . $name . '  Type:' . gettype($variable) . '  Class:' . get_class($variable);
                $data = collect($variable)->toArray();
                break;
            default:
                $output = $file_line . $name . '   Type:' . gettype($variable);
                $data = $variable;
                break;
        }

        // phpstorm plugin - https://plugins.jetbrains.com/plugin/7677-awesome-console
        // allows you to jump to file and line number
        // file and line number
        $dumper->dump((new Symfony\Component\VarDumper\Cloner\VarCloner())->cloneVar($output));

        $cloner = new Symfony\Component\VarDumper\Cloner\VarCloner();
        $dumper->dump($cloner->cloneVar($data));
    }
}

