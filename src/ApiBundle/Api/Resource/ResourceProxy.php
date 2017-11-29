<?php

namespace ApiBundle\Api\Resource;

use Doctrine\ORM\Mapping\Entity;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\NameConverter\CamelCaseToSnakeCaseNameConverter;
use Symfony\Component\Serializer\Serializer;

class ResourceProxy
{
    private $resource;

    private $fieldFilters;

    private $fieldFilterFactory;

    public function __construct(FieldFilterFactory $factory, AbstractResource $resource)
    {
        $this->resource = $resource;
        $this->fieldFilterFactory = $factory;
    }

    public function __call($method, $arguments)
    {
        $result = call_user_func_array(array($this->resource, $method), $arguments);
        if (in_array($method, $this->resource->supportMethods()) && $this->getFieldFilter($method)) {
            $this->filterResult($method, $result);
        }
        return $result;
    }

    private function getFieldFilter($method)
    {
        if (empty($this->fieldFilters[$method])) {
            $this->fieldFilters[$method] = $this->fieldFilterFactory->createFilter($this->resource, $method);
        }

        return $this->fieldFilters[$method];
    }

    public function getResource()
    {
        return $this->resource;
    }

    private function filterResult($method, &$result)
    {
        if ($method == AbstractResource::METHOD_SEARCH) {
            $this->getFieldFilter($method)->filters($result);
        } else {
            $this->getFieldFilter($method)->filter($result);
        }
    }
}
