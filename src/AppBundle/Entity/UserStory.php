<?php
/**
 * Created by PhpStorm.
 * User: ilham
 * Date: 11/22/17
 * Time: 6:05 PM
 */

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Class UserStory
 * @Gedmo\Tree(type="nested")
 * @ORM\Entity(repositoryClass="Gedmo\Tree\Entity\Repository\NestedTreeRepository")
 * @ORM\Table(name="user_story")
 *
 */
class UserStory
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="integer")
     */
    protected $priority;

    /**
     * @ORM\Column(type="text")
     */
    protected $userStory;

    /**
     * @ORM\Column(type="string")
     */
    protected $businessAnalys;

    /**
     * @ORM\Column(type="string")
     */
    protected $productManager;

    /**
     * @ORM\Column(type="string")
     */
    protected $owner;

    /**
     * @Gedmo\TreeLeft
     * @ORM\Column(type="integer")
     */
    private $lft;

    /**
     * @Gedmo\TreeLevel
     * @ORM\Column(type="integer")
     */
    private $lvl;

    /**
     * @Gedmo\TreeRight
     * @ORM\Column(type="integer")
     */
    private $rgt;

    /**
     * @Gedmo\TreeRoot
     * @ORM\ManyToOne(targetEntity="UserStory")
     * @ORM\JoinColumn(referencedColumnName="id", onDelete="CASCADE")
     */
    private $root;

    /**
     * @Gedmo\TreeParent
     * @ORM\ManyToOne(targetEntity="UserStory", inversedBy="children")
     * @ORM\JoinColumn(referencedColumnName="id", onDelete="CASCADE")
     */
    private $parent;

    /**
     * @ORM\OneToMany(targetEntity="UserStory", mappedBy="parent")
     * @ORM\OrderBy({"lft" = "ASC"})
     */
    private $children;

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set priority
     *
     * @param integer $priority
     * @return UserStory
     */
    public function setPriority($priority)
    {
        $this->priority = $priority;

        return $this;
    }

    /**
     * Get priority
     *
     * @return integer
     */
    public function getPriority()
    {
        return $this->priority;
    }

    /**
     * Set userStory
     *
     * @param string $userStory
     * @return UserStory
     */
    public function setUserStory($userStory)
    {
        $this->userStory = $userStory;

        return $this;
    }

    /**
     * Get userStory
     *
     * @return string
     */
    public function getUserStory()
    {
        return $this->userStory;
    }

    /**
     * Set businessAnalys
     *
     * @param string $businessAnalys
     * @return UserStory
     */
    public function setBusinessAnalys($businessAnalys)
    {
        $this->businessAnalys = $businessAnalys;

        return $this;
    }

    /**
     * Get businessAnalys
     *
     * @return string
     */
    public function getBusinessAnalys()
    {
        return $this->businessAnalys;
    }

    /**
     * Set productManager
     *
     * @param string $productManager
     * @return UserStory
     */
    public function setProductManager($productManager)
    {
        $this->productManager = $productManager;

        return $this;
    }

    /**
     * Get productManager
     *
     * @return string
     */
    public function getProductManager()
    {
        return $this->productManager;
    }

    /**
     * Set owner
     *
     * @param string $owner
     * @return UserStory
     */
    public function setOwner($owner)
    {
        $this->owner = $owner;

        return $this;
    }

    /**
     * Get owner
     *
     * @return string
     */
    public function getOwner()
    {
        return $this->owner;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->children = new ArrayCollection();
    }

    /**
     * Set lft
     *
     * @param integer $lft
     * @return UserStory
     */
    public function setLft($lft)
    {
        $this->lft = $lft;

        return $this;
    }

    /**
     * Get lft
     *
     * @return integer
     */
    public function getLft()
    {
        return $this->lft;
    }

    /**
     * Set lvl
     *
     * @param integer $lvl
     * @return UserStory
     */
    public function setLvl($lvl)
    {
        $this->lvl = $lvl;

        return $this;
    }

    /**
     * Get lvl
     *
     * @return integer
     */
    public function getLvl()
    {
        return $this->lvl;
    }

    /**
     * Set rgt
     *
     * @param integer $rgt
     * @return UserStory
     */
    public function setRgt($rgt)
    {
        $this->rgt = $rgt;

        return $this;
    }

    /**
     * Get rgt
     *
     * @return integer
     */
    public function getRgt()
    {
        return $this->rgt;
    }

    /**
     * Set root
     *
     * @param UserStory $root
     * @return UserStory
     */
    public function setRoot(UserStory $root = null)
    {
        $this->root = $root;

        return $this;
    }

    /**
     * Get root
     *
     * @return UserStory
     */
    public function getRoot()
    {
        return $this->root;
    }

    /**
     * Set parent
     *
     * @param UserStory $parent
     * @return UserStory
     */
    public function setParent(UserStory $parent = null)
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * Get parent
     *
     * @return UserStory
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * Add children
     *
     * @param UserStory $children
     * @return UserStory
     */
    public function addChild(UserStory $children)
    {
        $this->children[] = $children;

        return $this;
    }

    /**
     * Remove children
     *
     * @param UserStory $children
     */
    public function removeChild(UserStory $children)
    {
        $this->children->removeElement($children);
    }

    /**
     * Get children
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getChildren()
    {
        return $this->children;
    }
}
