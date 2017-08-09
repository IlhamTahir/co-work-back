<?php

namespace AppBundle\Controller;


class DefaultController extends BaseController
{
    public function indexAction()
    {
        return $this->render('AppBundle::index.html.twig');
    }
}
