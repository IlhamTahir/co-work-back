<?php

namespace AppBundle\Service;

use Symfony\Component\DependencyInjection\ContainerAware;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class BaseService extends ContainerAware
{
    /**
     * @return \Doctrine\Bundle\DoctrineBundle\Registry|object
     */
    public function getDoctrine()
    {
        if (!$this->container->has('doctrine')) {
            throw new \LogicException('The DoctrineBundle is not registered in your application.');
        }

        return $this->container->get('doctrine');
    }

    /**
     * Returns true if the service id is defined.
     *
     * @param string $id The service id
     *
     * @return bool true if the service id is defined, false otherwise
     */
    public function has($id)
    {
        return $this->container->has($id);
    }

    /**
     * @param $id
     * @return object
     */
    public function get($id)
    {
        if ('request' === $id) {
            @trigger_error('The "request" service is deprecated and will be removed in 3.0. Add a typehint for Symfony\\Component\\HttpFoundation\\Request to your controller parameters to retrieve the request instead.', E_USER_DEPRECATED);
        }

        return $this->container->get($id);
    }

    /**
     * @param $name
     * @return mixed
     */
    protected function getParameter($name)
    {
        return $this->container->getParameter($name);
    }

    protected function normalize($object)
    {
        $normalize = new ObjectNormalizer();
        return $normalize->normalize($object);
    }
}